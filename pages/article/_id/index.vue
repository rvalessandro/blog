<template>
  <div class="container mx-auto">
    <div class="content" v-html="$md.render(article.content)"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    articles: null
  }),
  async created() {
    try {
      const res = await this.$axios.get(`/articles/${this.$route.params.id}`);
      this.articles = res.data;
    } catch (err) {
      console.log("Err:", err);
    }
  }
};
</script>

<style></style>
