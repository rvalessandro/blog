<template>
  <nav id="navbar" class="h-16 px-8 md:px-0 mb-4 w-screen pb-2 pt-1">
    <div
      id="non-mobile"
      class="hidden md:flex justify-between items-center h-full w-full mx-auto "
      style="max-width: 44rem;"
    >
      <nuxt-link to="/" class="mt-1 -ml-4 md:-ml-1 xl:-ml-4">
        <img src="../assets/svg/icons8-home.svg" style="width: 2.5rem" />
      </nuxt-link>

      <ul class="flex">
        <button
          @click="goTo('/')"
          class="mx-2 px-2 uppercase text-sm font-regular text-gray-800 tracking-wide"
          :class="{
            'text-gray-700 border-b-2 border-gray-700': activePage == 1
          }"
        >
          blog
        </button>
        <button
          @click="goTo('/books')"
          class="mx-2 px-2 uppercase text-sm font-regular text-gray-800 tracking-wide"
          :class="{
            'text-gray-700 border-b-2 border-gray-700': activePage == 2
          }"
        >
          book recommendation
        </button>
        <button
          @click="goTo('/about')"
          class="mx-2 px-2 uppercase text-sm font-regular text-gray-800 tracking-wide line-through"
          :class="{
            'text-gray-700 border-b-2 border-gray-700': activePage == 3
          }"
        >
          about
        </button>
      </ul>
    </div>

    <div
      id="mobile"
      class="flex md:hidden items-center justify-between h-full w-full"
    >
      <nuxt-link to="/" class="mt-1">
        <img src="../assets/svg/icons8-home.svg" style="width: 2.5rem" />
      </nuxt-link>

      <button
        class="hamburger hamburger--squeeze focus:outline-none"
        :class="{ 'is-active': showMobileNav }"
        type="button"
        @click="showMobileNav = !showMobileNav"
      >
        <span class="hamburger-box mt-2">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <div
      v-show="showMobileNav"
      id="mobile-navigation"
      class="w-screen h-screen z-100 flex flex-col px-8 pb-4 relative -ml-16"
    >
      <transition name="slide-fade">
        <ul
          v-if="showMobileNav"
          class="flex flex-col shadow-md rounded bg-white w-screen -mt-3 pb-4 px-8"
        >
          <button
            @click="goTo('/')"
            class="my-2 uppercase text-sm font-regular text-gray-800 tracking-wide"
          >
            blog
          </button>
          <button
            @click="goTo('/books')"
            class="my-2 uppercase text-sm font-regular text-gray-800 tracking-wide"
          >
            book recommendation
          </button>
          <button
            @click="goTo('/about')"
            class="my-2 uppercase text-sm font-regular text-gray-800 tracking-wide line-through"
          >
            about
          </button>

          <div id="links">
            <a href="https://linkedin.com/in/rvalessandro">
              <img src="../assets/svg/icons8-linkedin-2.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/rvalessandro">
              <img src="../assets/svg/icons8-github.svg" alt="Github" />
            </a>
            <a href="https://gitlab.com/rvalessandro">
              <img src="../assets/svg/icons8-gitlab.svg" alt="Gitlab" />
            </a>
          </div>
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
  computed: {
    activePage: function() {
      switch (this.$route.path) {
        case "/":
          return 1;
        case "/books":
          return 2;
      }
    }
  },
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
#navbar * {
  font-family: Poppins;

  #mobile {
    a,
    button {
      // Tap highlight color
      -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
      -webkit-text-size-adjust: none; /* prevent webkit from resizing text to fit */
      -webkit-tap-highlight-color: rgba(
        0,
        0,
        0,
        0
      ); /* prevent tap highlight color / shadow */
      -webkit-user-select: none;
    }
  }

  #links {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0;

    img {
      margin: 0 1rem;
      width: 2.25rem;
    }
  }
}
#backdrop {
  background-color: rgba($color: #14213d, $alpha: 0.15);
}
</style>

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
