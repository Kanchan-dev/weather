<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">About</h1>
	  <div>
        <a href="/about/">About</a>
      </div>
      <div>
        <nuxt-link to="/">TOP</nuxt-link>
      </div>
      <div id="listBox"></div>
      <div id="targetBox"></div>
	  
	  <Tweet :id="tweets"/>
	<!-- <Tweet id="1284468430817513472"></Tweet> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Meta from "~/assets/mixins/meta";
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
export default {
  mixins: [Meta],
  components: {
    Tweet: Tweet
  },
  data() {
    return {
      meta: {
        title: "About",
        description: "このページについて",
        type: "article",
        url: "https://example.com/test",
        image: "https://example.com/img/ogp/test.jpg"
      },
      results: [],
      list: [],
	  tag: "",
	  tweets:"1284468430817513472" 
    };
  },
  mounted() {
    const param = location.search.substr(1);
    let apiURL = "https://tekutekustudio.com/wp/wp-json/wp/v2/posts";
    let isSingle = false;
    if (param) {
      console.log("ある");
      isSingle = true;
      const id = param.split("key=")[1];
      apiURL += `/${id}`;
    }

    axios.get(apiURL).then(response => {
	  this.results = response;
	  const tag = this.results.data["content"]["rendered"];
      console.log(tag);
      if (isSingle) {
        const targetBox = document.querySelector("#targetBox");
        targetBox.insertAdjacentHTML(
          "beforebegin",
          tag+''
		);
		
      } else {
        const listBox = document.querySelector("#listBox");
        let listTag = '<ul class="list">';
        for (var i = 0; i < this.results.data.length; i++) {
		  const id = this.results.data[i]["link"].split("?p=")[1]
          console.log(this.results.data[i]["title"]["rendered"]);
          console.log(id);
          listTag += `<li><a href="./?key=${id}">${this.results.data[i]["title"]["rendered"]}</a></li>`;
        }
        listTag += "</ul>";
        listBox.insertAdjacentHTML("beforebegin", listTag);
      }
    });

    /* const testBox = document.querySelector("#testBox");
	testBox.insertAdjacentHTML('beforebegin',this.tag); */

    //   console.log(this.results[0]['content']['rendered'])
    // console.log('?????')
    // targetBox.insertAdjacentHTML('beforebegin',this.results[0]['content']['rendered']);
    // alert(this.results[0]['content']['rendered'])

    //   targetBox.insertAdjacentHTML('beforebegin','<p>aaa</p>');
  }
  /* async asyncData ({ params }) {
    const { data } = await axios.get(`https://tekutekustudio.com/wp/wp-json/wp/v2/posts`)
    return { 
		list: data,
		tag:data[0]['content'].rendered
	 }
  } */
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.list {
  text-align: left;
  margin: 30px 0;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
