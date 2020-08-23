const state = () => ({
  articles: null
});

const getters = {
  articles: state => state.articles
};

const actions = {
  storeArticles: ({ commit }, articles) => {
    commit("storeArticles", articles);
  }
};

const mutations = {
  storeArticles: (state, articles) => (state.articles = articles)
};

export default {
  state,
  getters,
  actions,
  mutations
};
