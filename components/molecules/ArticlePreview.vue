<template>
  <div>
    <h1
      id="article-title"
      class="text-2xl text-gray-900 font-semibold leading-normal mb-3 cursor-pointer transition-all ease-in duration-75 hover:underline"
      @click="goToDetail(article)"
    >
      {{ article.title }}
    </h1>

    <div id="preview" class="w-full text-gray-600 mt-1 sm:mt-0">
      <div class="content" v-html="$md.render(article.preview)"></div>
      <div class="flex justify-between items-center">
        <button
          class="bg-black text-white hover:bg-white hover:text-black border border-black px-8 py-2 rounded transition duration-200 ease-in-out"
          @click="goToDetail(article)"
        >
          Read more
        </button>
        <span class="text-sm text-gray-600 w-24" style="margin-top: 0.125rem;">
          {{ formatDate(article.created_at) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    // Action methods
    goToDetail({ id }) {
      this.$router.push(`/articles/${id}`);
    },

    // Helper methods
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
