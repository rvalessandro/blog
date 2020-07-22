const state = () => ({
  categories: null
});

const getters = {
  categories: state => state.categories
};

const actions = {
  async fetchCategories({ commit }) {
    const response = await this.$axios.get("/categories");
    commit("setCategories", response.data);
  }
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories)
};

export default {
  state,
  getters,
  actions,
  mutations
};
