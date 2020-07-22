<template>
  <div class="flex flex-col-reverse md:flex-col">
    <div id="categories" class="w-full -ml-4 -mr-4 md:ml-0 md:mr-0 ">
      <div
        id="non-mobile-categories"
        class="hidden md:flex flex-wrap justify-center"
      >
        <div
          class="mx-6 mt-4 bg-gray-200 text-gray-600 px-6 py-2 text-sm font-semibold rounded cursor-pointer transition ease-in duration-75"
        >
          All
        </div>
        <div
          v-for="category in categories"
          :key="category.id"
          class="mx-6 mt-4 hover:bg-gray-200 text-gray-600 px-6 py-2 text-sm font-semibold rounded cursor-pointer transition ease-in duration-75"
        >
          <span> {{ category.name }} </span>
        </div>
      </div>

      <div
        id="mobile-categories"
        class="flex md:hidden flex-col flex-wrap justify-center ml-4 w-full border-t-2 border-gray-600 pt-8"
      >
        <h1 class=" font-semibold text-gray-800 text-lg uppercase">
          Categories
        </h1>
        <li class="mt-1 text-gray-600 py-2 text-sm font-semibold underline">
          All
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          class="mt-0 text-gray-600 py-2 text-sm font-semibold underline"
        >
          <span> {{ category.name }} </span>
        </li>
      </div>
    </div>

    <div
      id="articles"
      class="mt-2 sm-mt-6 md:mt-12 flex flex-col mx-auto"
      style="max-width: 44rem"
    >
      <div v-for="article in articles" :key="article.id" class="mb-10 md:mb-4">
        <h1
          id="article-title"
          class="text-3xl font-semibold text-gray-700 mb-3 cursor-pointer transition-all ease-in duration-75 hover:underline"
          @click="goToDetail(article)"
        >
          {{ article.title }}
        </h1>

        <div id="details" class="flex flex-col md:flex-row">
          <div
            id="left-column"
            class="w-full flex md:w-64 md:flex-col"
            style="min-width: 14rem"
          >
            <div class="flex flex-wrap w-full">
              <div
                v-for="category in article.categories"
                :key="category.id"
                class="mb-6 mr-4"
              >
                <span
                  class="text-sm text-gray-70 pb-2 border-b-2 border-blue-500"
                >
                  {{ category.name }}
                </span>
              </div>
            </div>

            <span class="text-sm text-gray-600 w-32">
              {{ formatDate(article.created_at) }}
            </span>
          </div>

          <div id="preview" class="w-full text-gray-700 mt-1 sm:mt-0">
            <div v-html="$md.render(article.preview)"></div>
            <div class="flex justify-end">
              <span
                class="text-blue-600 text-sm float-right -mt-2 cursor-pointer hover:underline hover:text-blue-700"
                @click="goToDetail(article)"
              >
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["articles", "categories"])
  },
  async created() {
    this.fetchArticles();
    this.fetchCategories();
  },
  methods: {
    ...mapActions(["fetchArticles", "fetchCategories"]),
    goToDetail(article) {
      this.$router.push(`/articles/${article.id}`);
    },

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
h1#article-title:hover {
  transform: scale(1.01) !important;
}
#preview p {
  margin-bottom: 1.25rem;
}
</style>
