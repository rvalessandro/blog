<template>
  <nav
    id="navbar"
    class="h-16 px-8 md:px-0 mb-3 w-screen pt-1 container mx-auto"
  >
    <div class="flex items-center justify-between h-full w-full pt-2">
      <button
        @click="$router.go(-1)"
        id="back-btn"
        class="uppercase text-sm font-regular text-gray-800 tracking-widest py-1 px-3 -ml-3"
      >
        back
      </button>
      <div>
        <button
          @click="goTo('/')"
          class="uppercase text-sm font-regular text-gray-800 tracking-widest px-2 py-1 mx-4"
          :class="{
            'text-gray-900 border-b-2 border-blue-600': activePage == 1
          }"
        >
          blog
        </button>
        <button
          @click="goTo('/books')"
          class="uppercase text-sm font-regular text-gray-800 tracking-widest px-2 py-1 mx-4 mr-0 pr-0"
          :class="{
            'text-gray-900 border-b-2 border-blue-600': activePage == 2
          }"
        >
          books
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
  font-family: Lato;

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

  #back-btn {
    border-bottom: 2px solid transparent;
  }
  #back-btn:hover {
    border-bottom: 2px solid gray;
    transition: 120ms ease-in;
  }
}
</style>
