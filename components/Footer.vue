<template>
  <div id="footer" class="container mx-auto -mt-1">
    <div id="credits" class="mt-2 text-center text-gray-700  text-xs">
      <span> &#169; 2020 - Raffi Verrel Alessandro</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  padding: 2rem 1rem;

  #links {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 1rem;
      width: 2.25rem;
    }
  }
}

@media screen and (min-width: 768px) {
  #footer {
    padding: 3rem 0;

    #links {
      img {
        margin: 0 2rem;
      }
    }
  }
}
</style>
