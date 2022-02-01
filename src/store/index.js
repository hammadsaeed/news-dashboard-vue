import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import { getNewsFeed, getSources } from './actions';
import { SET_LIVE_NEWS_FEED, UPDATE_LOADING, SET_SOURCES } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    SET_LIVE_NEWS_FEED,
    UPDATE_LOADING,
    SET_SOURCES,
  },
  actions: {
    getNewsFeed,
    getSources,
  },
  modules: {
  },
  getters: {
    loading(s) {
      return s.loading;
    },
  },
});
