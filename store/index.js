import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import BookCategory from "./modules/BookCategory";

export default () =>
  new Vuex.Store({
    modules: [BookCategory],
  });
