<template>
  <div class="container mx-auto pb-12 -mt-2" style="max-width: 42.5rem">
    <div v-if="article">
      <div
        id="title"
        class="text-3xl font-semibold text-gray-700 mb-3 mt-4 font-serif"
      >
        {{ article.title }}
      </div>

      <div class="flex justify-between">
        <div id="categories" class="flex flex-wrap w-full">
          <div
            v-for="category in article.categories"
            :key="category.id"
            class="mb-6 mr-4"
          >
            <span class="text-sm text-gray-700 pb-2 border-b-2 border-blue-500">
              {{ category.name }}
            </span>
          </div>
        </div>
        <span class="text-sm text-gray-600 w-32" style="margin-top: .125rem">
          {{ formatDate(article.created_at) }}
        </span>
      </div>

      <div class="content mt-1" v-html="$md.render(article.content)"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["articles"]),
    article: function() {
      let article = null;

      if (this.articles) {
        article = this.articles.find(
          article => article.id == this.$route.params.id
        );
      }

      article = this.$store.getters["article"];

      return article;
    }
  },
  created() {
    this.fetchArticle(this.$route.params.id);
  },
  methods: {
    ...mapActions(["fetchArticle"]),
    formatDate(date) {
      const d = new Date(date);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

      return `${mo} ${da}, ${ye}`;
    }
  }
};
</script>

<style>
.content p {
  margin-bottom: 1.25rem;
  line-height: 2rem;
  font-size: 1rem;
  color: #2d3748;
}
</style>
