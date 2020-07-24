<template>
  <div class="flex flex-col md:flex-col">
    <div id="categories" class="w-full -ml-4 -mr-4 md:ml-0 md:mr-0 ">
      <div
        id="non-mobile-categories"
        class="hidden md:flex flex-wrap justify-center text-blue-700"
      >
        <div
          class="mx-6 mt-4 px-6 py-1 flex items-center justify-center text-sm font-semibold rounded underline cursor-pointer transition ease-in duration-75"
          :class="{ 'text-gray-800 no-underline': activeCat == 'All' }"
          @click="filter('All')"
        >
          All
        </div>
        <div
          v-for="category in categories"
          :key="category.id"
          class="mx-6 mt-4 px-6 py-1 flex items-center justify-center text-sm font-semibold rounded underline cursor-pointer transition ease-in duration-75"
          :class="{ 'text-gray-800 no-underline': activeCat == category.name }"
          @click="filter(category.name)"
        >
          <span> {{ category.name }} </span>
        </div>
      </div>

      <div
        id="mobile-categories"
        class="hidden text-blue-700 md:hidden flex-col flex-wrap justify-center ml-4 w-full border-b-2 pb-6 mb-2 border-gray-600"
      >
        <h1 class=" font-semibold text-gray-800 text-lg uppercase">
          Categories
        </h1>
        <li
          class="mt-0 py-2 text-sm font-semibold underline"
          :class="{ 'text-gray-800 no-underline': activeCat == 'All' }"
          @click="filter('All')"
        >
          All
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          class="mt-0 py-2 text-sm font-semibold underline"
          :class="{ 'text-gray-800 no-underline': activeCat == category.name }"
          @click="filter(category.name)"
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
      <div
        v-for="article in displayedArticles"
        :key="article.id"
        class="mb-8 md:mb-4 ml-1"
      >
        <h1
          id="article-title"
          class="text-2xl md:text-3xl font-semibold text-gray-700 mb-3 cursor-pointer transition-all ease-in duration-75 hover:underline"
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
                  class="text-sm text-gray-700 pb-2 border-b-2"
                  style="border-color: #14213d;"
                >
                  {{ category.name }}
                </span>
              </div>
            </div>

            <span
              class="text-sm text-gray-600 w-32"
              style="margin-top: .125rem"
            >
              {{ formatDate(article.created_at) }}
            </span>
          </div>

          <div id="preview" class="w-full text-gray-700 mt-1 sm:mt-0">
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    displayedArticles: [],
    activeCat: "All"
  }),
  computed: {
    ...mapGetters(["allArticles", "categories"])
  },
  async created() {
    await this.fetchAllArticles();
    this.fetchCategories();
    this.displayedArticles = this.allArticles;
  },
  methods: {
    ...mapActions(["fetchAllArticles", "fetchCategories", "filterByCategory"]),
    async filter(categoryName) {
      this.activeCat = categoryName;
      try {
        if (categoryName == "All") {
          await this.fetchAllArticles();
          this.displayedArticles = this.allArticles;
        } else {
          this.displayedArticles = await this.filterByCategory(categoryName);
        }
      } catch (err) {
        console.log(err);
      }
    },
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

<style lang="scss">
h1#article-title:hover {
  transform: scale(1.01) !important;
}

.content {
  p {
    margin-bottom: 1.25rem !important;
    line-height: 2rem;
    font-size: 0.875rem;
    color: #2d3748;
  }
}
@media screen and (min-width: 768px) {
  .content p {
    font-size: 1rem;
  }
}
</style>
