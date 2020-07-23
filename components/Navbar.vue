<template>
  <nav class="h-16 container px-8 md:px-0 mx-auto">
    <div
      id="non-mobile"
      class="hidden md:flex justify-end items-center h-full w-full"
    >
      <ul class="font-sans tracking-wider flex">
        <button
          @click="goTo('/')"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          blog
        </button>
        <button
          @click="goTo('/projects')"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          projects
        </button>
        <button
          @click="goTo('/about')"
          class="mx-4 uppercase text-sm font-semibold text-gray-600"
        >
          about
        </button>
      </ul>
    </div>

    <div
      id="mobile"
      class="flex md:hidden items-center justify-between h-full w-full"
    >
      <nuxt-link to="/" class="-mt-1">
        <img src="https://img.icons8.com/color/36/000000/home.png" />
      </nuxt-link>

      <button
        class="hamburger hamburger--squeeze focus:outline-none"
        :class="{ 'is-active': showMobileNav }"
        type="button"
        @click="showMobileNav = !showMobileNav"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <transition name="slide-fade">
      <div
        id="mobile-navigation"
        class="w-screen z-20 bg-white absolute top-16 left-0 px-8 pb-4 shadow-md rounded"
        v-if="showMobileNav"
      >
        <ul class="font-sans tracking-wider flex flex-col">
          <button
            @click="goTo('/')"
            class="my-3 uppercase text-sm font-semibold text-gray-600"
          >
            blog
          </button>
          <button
            @click="goTo('/projects')"
            class="my-3 uppercase text-sm font-semibold text-gray-600"
          >
            projects
          </button>
          <button
            @click="goTo('/about')"
            class="my-3 uppercase text-sm font-semibold text-gray-600"
          >
            about
          </button>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMobileNav: false
  }),

  methods: {
    goTo(link) {
      this.showMobileNav = false;
      this.$router.push(link);
    }
  }
};
</script>

<style lang="scss" scoped>
$hamburger-layer-width: 36px;
$hamburger-layer-height: 3px;
$hamburger-layer-color: #4a5568;
$hamburger-padding-x: 0;
$hamburger-padding-y: 0;
@import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
.hamburger {
  margin-top: 0.25rem;
}

a.nuxt-link-active.nuxt-link-exact-active {
  color: #3182ce;
}
</style>

<style lang="css" scoped>
.slide-fade-enter-active {
  transition: all 0.125s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.125s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
