<template>
  <div v-show="article" class="bg-white shadow-lg p-8 md:p-8 rounded mb-2">
    <h1
      id="article-title"
      class="text-xl text-gray-900 font-semibold leading-normal mb-3 cursor-pointer transition-all ease-in duration-75 hover:underline"
      @click="goToDetail(article)"
    >
      {{ article.title }}
    </h1>

    <div id="details" class="flex flex-col md:flex-row">
      <div
        id="left-column"
        class="w-full flex md:w-64 md:flex-col justify-between"
        style="min-width: 14rem;"
      >
        <div class="flex flex-wrap w-full">
          <div
            v-for="category in article.categories"
            :key="category.id"
            class="mb-6 mr-4"
          >
            <span
              class="text-sm text-gray-700 pb-2 px-2 border-b-2 border-blue-600"
            >
              {{ category.name }}
            </span>
          </div>
        </div>

        <span class="text-sm text-gray-600 w-32" style="margin-top: 0.125rem;">
          {{ formatDate(article.created_at) }}
        </span>
      </div>

      <div id="preview" class="w-full text-gray-600 mt-1 sm:mt-0">
        <div class="content" v-html="$md.render(article.preview)"></div>
        <div class="flex justify-end">
          <span
            class="text-blue-600 text-sm underline float-right -mt-4 md:-mt-2 cursor-pointer hover:underline hover:text-blue-700"
            @click="goToDetail(article)"
          >
            Read more
          </span>
        </div>
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

<style></style>
