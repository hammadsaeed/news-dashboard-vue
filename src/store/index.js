import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import { getNewsFeed } from './actions';
import { SET_LIVE_NEWS_FEED } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    SET_LIVE_NEWS_FEED,
  },
  actions: {
    getNewsFeed,
  },
  modules: {
  },
});
