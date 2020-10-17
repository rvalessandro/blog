<template>
  <div class="flex flex-col justify-center items-center mb-4">
    <h1 id="title" class="text-4xl">
      Hi! I'm <strong class="text-blue-600">Andro</strong>.
    </h1>
    <div
      id="description"
      class="text-center my-4 max-w-2xl leading-7 text-gray-700"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>

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

<script>
export default {};
</script>

<style lang="scss" scoped>
#links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  margin: 1rem 0;
  margin-top: 0.5rem;

  a {
    width: 2rem;
  }
}
</style>
