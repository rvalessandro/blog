<template>
  <div class="flex flex-col md:flex-col">
    <Hero />
    <HomeContents />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "vue-loading-overlay";
import HomeContents from "../components/organisms/HomeContents";
import Hero from "../components/organisms/Hero";

export default {
  data: () => ({
    activeCat: "All",

    isLoading: false,
    fullPage: true
  }),
  components: {
    Loading
  },

  computed: {
    ...mapGetters(["articles"])
  },

  async created() {
    this.isLoading = true;
    if (!this.articles || this.articles.length < 1) {
      await this.fetchArticles();
    }
    this.isLoading = false;
  },

  methods: {
    ...mapActions(["storeArticles"]),

    // Data Fetching
    async fetchArticles() {
      const res = await this.$axios.get("/articles?_sort=id:DESC");
      this.storeArticles(res.data);
    }
  }
};
</script>

<style lang="scss">
#loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
}

#articles {
  & > *:last-child {
    margin-bottom: 0;
  }
}

h1#article-title:hover {
  transform: scale(1.01) !important;
}
</style>
