<template>
  <div>
    <div id="targetBox2"></div>
    <div id="listBox2"></div>
  </div>
</template>


<script>
import axios from "axios";
import Meta from "~/assets/mixins/meta";
import { Tweet, Moment, Timeline } from "vue-tweet-embed";
export default {
  mixins: [Meta],
  components: {
    Tweet: Tweet
  },
  head() {
    return {
      title: this.title
      //   titleTemplate: ''
    };
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
      description: "",
      results: [],
      list: [],
      tag: ""
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
        const title = this.results.data["title"]["rendered"];
        console.log(title);
        this.title = title + '-' +this.title;
				this.description = title+'のディスクリプション'
        // console.log(tag);
        const targetBox = document.querySelector("#targetBox2");
        targetBox.insertAdjacentHTML("beforebegin", tag);
      } else {
        console.log("1こっち");
        const listBox = document.querySelector("#listBox2");
        let listTag = '<ul class="list">';
        for (var i = 0; i < this.results.data.length; i++) {
          const id = this.results.data[i]["link"].split("?p=")[1];
          console.log(this.results.data[i]["title"]["rendered"]);
          console.log(id);
          listTag += `<li><a href="./?key=${id}">${this.results.data[i]["title"]["rendered"]}</a></li>`;
        }
        listTag += "</ul>";
        listBox.insertAdjacentHTML("beforebegin", listTag);
      }
      twttr.widgets.load();
      this.loadEmbedJS();
    });
  },
  beforeDestroy() {
    delete window.instgrm;
  },
  methods: {
    loadEmbedJS() {
      const script = document.createElement("script");
      script.async = script.defer = true;
      script.src = "//www.instagram.com/embed.js";
      this.$el.appendChild(script);
    }
  }
};
</script>