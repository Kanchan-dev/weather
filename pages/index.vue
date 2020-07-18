<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">weather_ar</h1>

	  <!-- <div v-html="results[0]['content']['rendered']"></div> -->
	  <div id="targetBox"></div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
	  results: [],
    };
  },
  mounted() {
	  const targetBox = document.querySelector('#targetBox')
	//   console.log(this.results[0]['content']['rendered'])
	targetBox.insertAdjacentHTML('beforebegin',this.results[0]['content']['rendered']);
	//   targetBox.insertAdjacentHTML('beforebegin','<p>aaa</p>');
  },
  async asyncData({ app }) {
    const baseUrl = 'https://tekutekustudio.com/wp/wp-json/wp/v2/posts'
    const getUrl = encodeURI(baseUrl)
	const response = await app.$axios.$get(getUrl)
	
    return {
      results: response
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
