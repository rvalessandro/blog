<template>
  <div class="flex flex-col md:flex-col">
    <Loading :active.sync="isLoading" :is-full-page="fullPage" id="loading" />

    <div
      v-show="articles"
      id="articles"
      class="flex flex-col mx-auto"
      style="max-width: 44rem;"
    >
      <div v-for="article in articles" :key="article.id" class="mb-8 md:mb-4">
        <h1
          id="article-title"
          class="text-xl text-gray-800 font-semibold leading-normal mb-3 cursor-pointer transition-all ease-in duration-75 hover:underline"
          @click="goToDetail(article)"
        >
          {{ article.title }}
        </h1>

        <div id="details" class="flex flex-col md:flex-row">
          <div
            id="left-column"
            class="w-full flex md:w-64 md:flex-col"
            style="min-width: 14rem;"
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
              style="margin-top: 0.125rem;"
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
import Loading from "vue-loading-overlay";
import { mapGetters, mapActions } from "vuex";

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
    },

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
