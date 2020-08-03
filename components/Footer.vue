<template>
  <div id="footer" class="container mx-auto">
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
