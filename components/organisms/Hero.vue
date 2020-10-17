<template>
  <div class="container flex h-screen flex items-center justify-center">
    <div>
      <div>
        <h1
          id="name"
          class="font-extrabold text-6xl tracking-wide border-black text-center"
          style="border-bottom-width: .8rem; line-height: 1.2; "
        >
          rvalessandro
        </h1>
      </div>
      <div class="mt-6">
        <p id="headline" class="text-4xl text-center">
          Aspiring <span id="grad">Software Engineer</span>
        </p>
        <div id="links" class="flex items-center justify-center mt-4 text-xl">
          <span class="link cursor-pointer px-1" @click="goTo('linkedin')"
            >LinkedIn</span
          >
          <span class="mx-3">&bull;</span>
          <span class="link cursor-pointer px-1" @click="goTo('github')"
            >Github</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(option) {
      switch (option) {
        case "linkedin":
          window.open("https://linkedin.com/in/rvalessandro");
          break;
        case "github":
          window.open("https://github.com/rvalessandro");
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
span.link:hover {
  background-color: black;
  color: white;
}
</style>
