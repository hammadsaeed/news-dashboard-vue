import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import {
  getNewsFeed, getSources, updateHistory, getResults, updateTitle, fakeUrl,
} from './actions';
import {
  SET_LIVE_NEWS_FEED,
  UPDATE_LOADING,
  SET_SOURCES,
  INITIALISE,
  SET_HISTORY,
  UPDATE_SEACH,
  UPDATE_TITLE,
  HANDLE_ERROR,
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
    HANDLE_ERROR,
  },
  actions: {
    getNewsFeed,
    getSources,
    updateHistory,
    getResults,
    updateTitle,
    fakeUrl,
  },
  modules: {
  },
  getters: {
    loading(s) {
      return s.loading;
    },
  },
});
