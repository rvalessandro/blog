const state = () => ({
  articles: null,
  article: null
});

const getters = {
  articles: state => state.articles,
  article: state => state.article
};

const actions = {
  async fetchArticles({ commit }) {
    const response = await this.$axios.get("/articles");
    commit("setArticles", response.data);
  },
  async fetchArticle({ commit }, articleId) {
    commit("setArticle", null);
    let article = null;

    if (state.articles) {
      article = state.articles.find(
        article => article.id == this.$route.params.id
      );
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
  setArticles: (state, articles) => (state.articles = articles),
  setArticle: (state, article) => (state.article = article)
};

export default {
  state,
  getters,
  actions,
  mutations
};
