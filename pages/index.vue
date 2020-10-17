<template>
  <div class="flex flex-col md:flex-col">
    <Hero />
    <HomeContents />
  </div>
</template>

<script>
import HomeContents from "../components/organisms/HomeContents";
import Hero from "../components/organisms/Hero";

export default {
  data: () => ({
    isLoading: false,
    fullPage: true
  })
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
