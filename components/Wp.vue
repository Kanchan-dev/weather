<template>
  <div>
	  <div id="targetBox2"></div>
	  <div id="listBox2"></div>
  </div>
</template>


<script>
import axios from "axios";
import Meta from "~/assets/mixins/meta";
import Tw from '~/components/Tw.vue'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
export default {
  mixins: [Meta],
  components: {
	Tweet: Tweet,
	Tw
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
	  
      
      if (isSingle) {
		const tag = this.results.data["content"]["rendered"];
		console.log(tag);
        const targetBox = document.querySelector("#targetBox2");
        targetBox.insertAdjacentHTML(
          "beforebegin",
          tag
		);
		
      } else {
		console.log('1こっち')
        const listBox = document.querySelector("#listBox2");
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
	  twttr.widgets.load()
	});
	let mapScript = document.createElement('script');
	// let src  = await this.$axios.$get("https://platform.twitter.com/widgets.js")
	/* mapScript.appendChild(document.createTextNode("https://platform.twitter.com/widgets.js"));
	console.log(mapScript)
	document.head.appendChild(mapScript); */
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