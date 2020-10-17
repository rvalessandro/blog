<template>
  <div class="container mx-auto" style="max-width: 52rem">
    <div v-for="category in bookCategories" :key="category.id" id="category">
      <h1
        class="text-gray-800 text-2xl pb-1 mb-6 ml-1 border-b-2 border-gray-500"
      >
        {{ category.point }}
      </h1>
      <div v-for="(book, i) in category.books" :key="book.id">
        <Book :book="book" />

        <hr
          v-if="i !== category.books.length - 1"
          class="my-12 w-1/2 border-2  mx-auto rounded border-gray-600"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "../../components/Book";

export default {
  data: () => ({
    bookCategories: [],

    isLoading: false,
    fullPage: true
  }),
  components: {
    Loading
  },

  async created() {
    this.isLoading = true;
    await this.fetchBookCategories();
    this.isLoading = false;
  },

  methods: {
    async fetchBookCategories() {
      const res = await this.$axios.get("/book-categories");
      this.bookCategories = res.data;
    }
  }
};
</script>

<style lang="scss" scoped>
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

#category {
  margin-bottom: 1.5rem;
}
@media screen and (min-width: 768px) {
  #category {
    margin-bottom: 2.5rem;
  }
}
#category:last-child {
  margin-bottom: 0;
}
</style>
