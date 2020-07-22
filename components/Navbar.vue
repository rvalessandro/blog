<template>
  <nav class="h-16 container px-8 md:px-0 mx-auto">
    <div class="flex justify-between items-center h-full w-full">
      <div></div>

      <ul class="font-sans tracking-wider">
        <nuxt-link
          to="/"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          blog
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          projects
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          about
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
a.nuxt-link-active.nuxt-link-exact-active {
  color: #3182ce;
}
</style>
