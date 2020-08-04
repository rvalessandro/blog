<template>
  <div class="flex flex-col md:flex-row px-1 -ml-1">
    <img
      :src="`https://blog-api.rvalessandro.com${book.image.url}`"
      alt="Cover"
      class="w-full h-auto mx-auto mb-6 md:mb-0"
    />
    <div class="md:ml-6">
      <h1
        id="title"
        class="text-2xl text-gray-800 tracking-wide font-semibold leading-normal mb-2"
      >
        {{ book.title }}
      </h1>
      <div class="content" v-html="$md.render(book.reason)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style lang="scss" scoped>
img {
  max-width: 300px;
}
</style>
