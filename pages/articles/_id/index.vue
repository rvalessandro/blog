<template>
  <div class="container mx-auto mt-6 md:mt-0 -mb-8">
    <div v-if="article" class="md:p-8 md:pb-0 md:px-12">
      <button
        id="backBtn"
        class="p-2 hover:border-4 transition duration-200 ease-in-out mb-3 md:mb-4 flex items-center"
        @click="goBack()"
      >
        <svg viewBox="0 0 24 24" height="24" width="24" class="mr-1 -ml-2">
          <path
            d="M17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.4142 12L17.7071 17.2929C18.0976 17.6834 18.0976 18.3166 17.7071 18.7071C17.3166 19.0976 16.6834 19.0976 16.2929 18.7071L10.2929 12.7071C9.90237 12.3166 9.90237 11.6834 10.2929 11.2929L16.2929 5.29289C16.6834 4.90237 17.3166 4.90237 17.7071 5.29289ZM11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L6.41421 12L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z"
          ></path>
        </svg>
        Back
      </button>
      <div class="mb-6">
        <h1
          id="title"
          class="text-4xl text-gray-900 font-semibold leading-normal mb-4"
        >
          {{ article.title }}
        </h1>
        <span
          class="text-sm text-gray-600 w-32 mb-6"
          style="margin-top: 0.125rem;"
        >
          {{ formatDate(article.created_at) }}
        </span>
      </div>

      <div
        class="content mt-1 text-gray-800"
        v-html="$md.render(article.content)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  scrollToTop: true,
  data: () => ({
    article: null
  }),

  computed: {
    ...mapGetters(["articles"])
  },

  async created() {
    window.scrollTo(0, 0);
    await this.fetchArticle(this.$route.params.id);
  },

  methods: {
    goBack() {
      this.$router.back();
    },

    // Data fetching
    async fetchArticle(id) {
      if (this.articles) {
        for (let i = 0; i < this.articles.length; i++) {
          if (this.articles[i].id == id) {
            this.article = this.articles[i];
            return;
          }
        }
      }

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
    }
  }
};
</script>

<style lang="scss" scoped>
#backBtn {
  border-bottom: 3px solid transparent;
  padding-bottom: 0.25rem;
}
#backBtn:hover {
  border-color: black;
}
</style>
