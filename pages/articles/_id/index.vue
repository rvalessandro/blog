<template>
  <div class="container mx-auto pb-12" style="max-width: 42.5rem">
    <div v-if="article">
      <div
        id="title"
        class="text-4xl font-semibold text-gray-700 mb-3 mt-4 font-serif"
      >
        {{ article.title }}
      </div>

      <div class="flex justify-between -mt-1">
        <div id="categories" class="flex flex-wrap">
          <div
            v-for="category in article.categories"
            :key="category.id"
            class="mr-4"
          >
            <span class="text-sm text-gray-700 pb-2 border-b-2 border-blue-500">
              {{ category.name }}
            </span>
          </div>
        </div>
        <span class="text-sm text-gray-600 leading-loose">
          {{ formatDate(article.created_at) }}
        </span>
      </div>

      <div class="content" v-html="$md.render(article.content)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    article: null
  }),
  async created() {
    try {
      const res = await this.$axios.get(`/articles/${this.$route.params.id}`);
      this.article = res.data;
    } catch (err) {
      console.log("Err:", err);
    }
  },
  methods: {
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
  margin: 1.5rem 0;
  line-height: 2rem;
  font-size: 1rem;
  color: #2d3748;
}
</style>
