import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Article from "./modules/Article";
import BookCategory from "./modules/BookCategory";
import Category from "./modules/Category";

export default () =>
  new Vuex.Store({
    modules: [Article, BookCategory, Category]
  });
