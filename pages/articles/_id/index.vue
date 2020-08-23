<template>
  <div class="container mx-auto -mb-5" style="max-width: 44rem;">
    <div v-if="article">
      <h1
        id="title"
        class="text-xl text-gray-800 font-semibold leading-normal mb-3"
      >
        {{ article.title }}
      </h1>

      <div class="flex justify-between">
        <div id="categories" class="flex flex-wrap w-full">
          <div
            v-for="category in article.categories"
            :key="category.id"
            class="mb-6 mr-4"
          >
            <span
              class="text-sm text-gray-700 pb-2 border-b-2"
              style="border-color: #14213d;"
            >
              {{ category.name }}
            </span>
          </div>
        </div>
        <span class="text-sm text-gray-600 w-32" style="margin-top: 0.125rem;">
          {{ formatDate(article.created_at) }}
        </span>
      </div>

      <div class="content mt-1" v-html="$md.render(article.content)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    article: null,
  }),

  async created() {
    await this.fetchArticle(this.$route.params.id);
  },

  methods: {
    // Data fetching
    async fetchArticle(id) {
      const res = await this.$axios.get(`/articles/${id}`);
      this.article = res.data;
    },

    // Helper methods
    formatDate(date) {
      const d = new Date(date);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

      return `${mo} ${da}, ${ye}`;
    },
  },
};
</script>
