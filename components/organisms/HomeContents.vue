<template>
  <div class="container mt-8 ">
    <!-- ARTICLES -->
    <div v-show="articles">
      <h1
        id="section-title"
        class="text-4xl text-gray-500 font-extrabold border-b-4 border-black inline"
      >
        Articles
      </h1>
      <div class="mt-8 md:mt-10">
        <div
          v-for="(article, i) in articles"
          :key="article.id"
          :class="{
            'mb-10 pb-10 border-b-2 border-gray-800': i !== articles.length - 1,
            'mb-4': i === articles.length - 1
          }"
        >
          <ArticlePreview :article="article" class="-mt-1" />
        </div>
      </div>
    </div>

    <!-- PROJECTS -->
    <!-- <div>
      <h1 id="section-title">
        Projects
      </h1>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArticlePreview from "../molecules/ArticlePreview";

export default {
  data: () => ({ isLoading: false }),
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

<style lang="scss" scoped>
hr {
  border-width: 1rem;
}
</style>
