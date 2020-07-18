<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">About</h1>
	  <div>
        <nuxt-link to="/">TOP</nuxt-link>
      </div>
	  <div id="testBox"></div>
	  <div id="targetBox"></div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Meta from "~/assets/mixins/meta";
export default {
  mixins: [Meta],
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
	  tag:''
    };
  },
  mounted() {
	console.log(this.tag);
    axios.get("https://tekutekustudio.com/wp/wp-json/wp/v2/posts").then(response => {
	  this.results = response;
	//   console.log(this.results.data.length)
	  const targetBox = document.querySelector("#targetBox");
	  targetBox.insertAdjacentHTML('beforebegin',this.results.data[0].content.rendered);
	});
	
	const testBox = document.querySelector("#testBox");
	testBox.insertAdjacentHTML('beforebegin',this.tag);
    
    //   console.log(this.results[0]['content']['rendered'])
    // console.log('?????')
    // targetBox.insertAdjacentHTML('beforebegin',this.results[0]['content']['rendered']);
    // alert(this.results[0]['content']['rendered'])

    //   targetBox.insertAdjacentHTML('beforebegin','<p>aaa</p>');
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(`https://tekutekustudio.com/wp/wp-json/wp/v2/posts`)
    return { 
		list: data,
		tag:data[0]['content'].rendered
	 }
  }
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
