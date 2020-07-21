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
      <Wp />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Meta from "~/assets/mixins/meta";
import Wp from "~/components/Wp.vue";
export default {
  mixins: [Meta],
  components: {
    Wp
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
			title: "About",
    };
  },
  mounted() {
		this.title = "About";
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
