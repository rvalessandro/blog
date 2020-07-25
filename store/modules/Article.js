const state = () => ({
  allArticles: [],
  displayedArticles: [],
  article: null
});

const getters = {
  allArticles: state => state.allArticles,
  displayedArticles: state => state.displayedArticles,
  article: state => state.article
};

const actions = {
  async fetchAllArticles({ commit, state }) {
    const res = await this.$axios.get("/articles?_sort=id:DESC");
    commit("setDisplayedArticles", res.data);
    commit("setAllArticles", res.data);
  },
  async filterByCategory({ commit, state }, categoryName) {
    const res = await this.$axios.get(
      `/articles?categories.name=${categoryName}&&_sort=id:DESC`
    );

    return res.data;
  },

  async fetchArticle({ commit, state }, articleId) {
    commit("setArticle", null);
    let article = null;

    if (state.allArticles) {
      article = state.allArticles.find(article => article.id == articleId);
    }
    if (!article) {
      try {
        const res = await this.$axios.get(`/articles/${articleId}`);
        article = res.data;
      } catch (err) {
        console.log("Err:", err);
      }
    }

    commit("setArticle", article);
  }
};

const mutations = {
  setAllArticles: (state, articles) => (state.allArticles = articles),
  setDisplayedArticles: (state, articles) =>
    (state.displayedArticles = articles),

  setArticle: (state, article) => (state.article = article)
};

export default {
  state,
  getters,
  actions,
  mutations
};
