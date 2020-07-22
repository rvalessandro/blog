import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Article from "./modules/Article";
import Category from "./modules/Category";

export default () =>
  new Vuex.Store({
    modules: [Article, Category]
  });
