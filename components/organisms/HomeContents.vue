<template>
  <div class="container my-8">
    <!-- ARTICLES -->
    <div v-show="articles">
      <h1
        id="section-title"
        class="text-4xl font-extrabold border-b-4 border-black inline"
      >
        Articles
      </h1>
      <div class="mt-10">
        <div
          v-for="(article, i) in articles"
          :key="article.id"
          class="mb-10 pb-10"
          :class="{ 'border-b-2 border-gray-800': i !== articles.length - 1 }"
        >
          <ArticlePreview :article="article" />
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
