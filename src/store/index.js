import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import {
  getNewsFeed, getSources, updateHistory, getResults, updateTitle,
} from './actions';
import {
  SET_LIVE_NEWS_FEED,
  UPDATE_LOADING,
  SET_SOURCES,
  INITIALISE,
  SET_HISTORY,
  UPDATE_SEACH,
  UPDATE_TITLE,
} from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    SET_LIVE_NEWS_FEED,
    UPDATE_LOADING,
    SET_SOURCES,
    INITIALISE,
    SET_HISTORY,
    UPDATE_SEACH,
    UPDATE_TITLE,
  },
  actions: {
    getNewsFeed,
    getSources,
    updateHistory,
    getResults,
    updateTitle,
  },
  modules: {
  },
  getters: {
    loading(s) {
      return s.loading;
    },
  },
});
