<template>
  <div>
    <!-- <Navbar /> -->
    <transition name="fade" mode="out-in">
      <Nuxt class="container mx-auto" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins");

html,
body {
  overflow-x: hidden;
  overflow-y: scroll;
}
body {
  position: relative;
}

* {
  font-family: "Inter", sans-serif;
  font-display: swap;
  box-sizing: border-box;

  /* Tap highlight color */
  -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
  -webkit-text-size-adjust: none; /* prevent webkit from resizing text to fit */
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}

.container {
  max-width: 52rem !important;
  padding: 0 1rem;
}
@media screen and (min-width: 768px) {
  .container {
    padding: 0;
  }
}

h1,
h2,
h3,
h4,
h5.h6 {
  font-family: Poppins;
}

button:focus {
  outline: 0 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<style lang="scss">
/**
 * Markdown Styling
 */
.content {
  p {
    margin-bottom: 1.25rem !important;
    line-height: 2rem;
    font-size: 0.875rem;
    color: #2d3748;
  }

  ul {
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
    font-size: 0.875rem;
  }

  li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }

  blockquote {
    box-shadow: inset 3px 0 0 0 rgba(41, 41, 41, 1);
    margin-left: -1rem;
    padding-left: 1rem;
  }
}
@media screen and (min-width: 768px) {
  .content p {
    font-size: 1rem;
  }
  .content ul {
    margin-left: 1.5rem;
    font-size: 1rem;
  }
}
</style>
