<template>
  <nav class="h-16 container px-8 md:px-0 mx-auto" style="max-width: 44rem">
    <div
      id="non-mobile"
      class="hidden md:flex justify-between items-center h-full w-full"
    >
      <nuxt-link to="/" class="-mt-1">
        <img src="https://img.icons8.com/color/36/000000/home.png" />
      </nuxt-link>

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

    <div
      v-show="showMobileNav"
      id="mobile-navigation"
      class="w-screen h-screen z-100 flex flex-col items-center -ml-8 px-8 pb-4 relative"
    >
      <transition name="slide-fade">
        <ul
          v-if="showMobileNav"
          class="font-sans -ml-3 tracking-wider flex flex-col shadow-md rounded bg-white w-screen -mt-3 pb-4"
        >
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
      </transition>

      <transition name="fade">
        <div
          id="backdrop"
          class="bg-blue h-full w-screen"
          v-if="showMobileNav"
          @click="showMobileNav = false"
        >
          &nbsp;
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMobileNav: false
  }),
  watch: {
    showMobileNav: function() {
      if (this.showMobileNav) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    }
  },
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
$hamburger-layer-color: #14213d;
$hamburger-padding-x: 0;
$hamburger-padding-y: 0;
@import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
.hamburger {
  margin-top: 0.25rem;
}
#backdrop {
  background-color: rgba($color: #14213d, $alpha: 0.15);
}

a.nuxt-link-active.nuxt-link-exact-active {
  color: #3182ce;
}
</style>

<style lang="css" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0.2s ease-out;
}
</style>
