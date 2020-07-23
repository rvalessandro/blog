const state = () => ({
  allArticles: [],
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

    let newArticles = [];
    for (let i = 0; i < res.data.length; i++) {
      if (!(res.data[i] in state.allArticles)) {
        newArticles.push(res.data[i]);
      }
    }

    commit("setAllArticles", newArticles);
  },
  async filterByCategory({ commit, state }, categoryName) {
    const res = await this.$axios.get(
      `/articles?categories.name=${categoryName}&&_sort=id:DESC`
    );

    return res.data;
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
  setAllArticles: (state, articles) => state.allArticles.push(...articles),

  setArticle: (state, article) => (state.article = article)
};

export default {
  state,
  getters,
  actions,
  mutations
};
