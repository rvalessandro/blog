<template>
  <div class="flex flex-col md:flex-col">
    <Loading :active.sync="isLoading" :is-full-page="fullPage" id="loading" />

    <div
      v-show="articles"
      id="articles"
      class="flex flex-col mx-auto"
      style="max-width: 52rem;"
    >
      <div v-for="article in articles" :key="article.id" class="mb-8 md:mb-4">
        <ArticlePreview :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "vue-loading-overlay";
import ArticlePreview from "../components/ArticlePreview";

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
