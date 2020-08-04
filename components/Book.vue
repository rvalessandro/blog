<template>
  <div class="flex flex-col md:flex-row px-1 -ml-1">
    <img
      :src="`https://blog-api.rvalessandro.com${book.image.url}`"
      alt="Cover"
      class="w-full h-auto mx-auto mb-6 md:mb-0 cursor-pointer"
      @click="goTo(book.link)"
    />
    <div class="md:ml-6">
      <h1
        id="title"
        class="text-2xl text-gray-800 tracking-wider font-semibold leading-normal mb-2 cursor-pointer hover:text-blue-700 transition duration-75 ease-in"
        @click="goTo(book.link)"
      >
        {{ book.title }}
      </h1>
      <div class="content" v-html="$md.render(book.reason)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    goTo(link) {
      window.location.href = link;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 300px;
}
</style>
