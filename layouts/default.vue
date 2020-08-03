<template>
  <div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <Nuxt class="container mx-auto px-8 sm:px-0 pt-2 pb-8 sm-pb-4 md-pb-8" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {};
</script>

<style>
html,
body {
  overflow-x: hidden;
  overflow-y: scroll;
}
body {
  position: relative;
}

* {
  font-family: Lato;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5.h6 {
  font-family: serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
