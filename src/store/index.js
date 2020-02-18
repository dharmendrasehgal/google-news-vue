import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import API from "../assets/data";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    news: [],
    techNews: [],
    articles: []
  },
  getters: {

  },
  mutations: {
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_TECH_NEWS(state, news) {
        state.techNews = news;
    },
    SET_ARTICLES(state, articles) {
        state.articles = articles;
    }
  },
  actions: {
    loadNews() {
        API("in",null,"SET_NEWS");
    },
    loadTechNews() {
        API("in", "technology", "SET_TECH_NEWS");
    },
    loadArticles() {
        API("us", null, "SET_ARTICLES");
    }
  },
  modules: {}
});
