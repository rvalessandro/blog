const state = () => ({
  bookCategories: []
});

const getters = {
  bookCategories: state => state.bookCategories
};

const actions = {
  async fetchBookCategories({ commit }) {
    const response = await this.$axios.get("/book-categories");
    commit("setBookCategories", response.data);
  }
};

const mutations = {
  setBookCategories: (state, bookCategories) =>
    (state.bookCategories = bookCategories)
};

export default {
  state,
  getters,
  actions,
  mutations
};
