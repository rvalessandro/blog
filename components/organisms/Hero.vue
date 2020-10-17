<template>
  <div class="container flex h-screen flex items-center justify-center">
    <div>
      <div class="text-center">
        <h1
          id="name"
          class="font-extrabold text-4xl md:text-6xl tracking-wide border-black text-center inline"
        >
          rvalessandro
        </h1>
      </div>
      <div class="mt-8 md:mt-6">
        <p id="headline" class="text-2xl md:text-4xl text-center">
          Aspiring <span id="grad">Software Engineer</span>
        </p>
        <div
          id="links"
          class="flex items-center justify-center mt-3 md:mt-4 text-xl md:text-xl"
        >
          <span
            class="link cursor-pointer px-1 border-b-2 border-black"
            @click="goTo('linkedin')"
            >LinkedIn
          </span>
          <span class="mx-3">&bull;</span>
          <span
            class="link cursor-pointer px-1 border-b-2 border-black"
            @click="goTo('github')"
            >Github
          </span>
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
#name {
  border-bottom-width: 0.5rem;
  line-height: 1.2;
}
@media screen and (min-width: 768px) {
  #name {
    border-bottom-width: 0.8rem;
  }
}

span.link:hover {
  background-color: black;
  color: white;
}
</style>
