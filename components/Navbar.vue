<template>
  <nav id="navbar" class="h-16 px-8 md:px-0 mb-3 w-screen pt-1">
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
          books
        </button>
      </ul>
    </div>

    <div
      id="mobile"
      class="flex items-center justify-end -mr-4 md:hidden h-full w-full pt-2"
    >
        <button
          @click="goTo('/')"
          class="uppercase text-sm font-regular text-gray-800 tracking-widest px-2 py-1 mx-4"
          :class="{
            'text-gray-900 border-b-2 border-blue-500': activePage == 1
          }"
        >
          blog
        </button>
        <button
          @click="goTo('/books')"
          class="uppercase text-sm font-regular text-gray-800 tracking-widest px-2 py-1"
          :class="{
            'text-gray-900 border-b-2 border-gray-700': activePage == 2
          }"
        >books
        </button>
    </div>

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
</style>

<style lang="scss" scoped>
* {
  font-family: lato !important;
}

</style>
