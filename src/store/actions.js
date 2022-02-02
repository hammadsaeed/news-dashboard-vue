import axios from 'axios';
import { config } from '../config';

const country = 'us';

export const getNewsFeed = ({ commit }) => {
  axios.get(`${config.newsApiEndpoint}/top-headlines?country=${country}&apiKey=${config.newApiKey}`)
    .then((response) => {
      if (response.status === 200 && response.data.articles) {
        commit('SET_LIVE_NEWS_FEED', response.data.articles);
      }
      if (response.data.status === 'ok') {
        commit('UPDATE_LOADING');
      }
    });
};

export const getSources = ({ commit }) => {
  axios.get(`${config.newsApiEndpoint}/sources?apiKey=${config.newApiKey}`)
    .then((response) => {
      if (response.status === 200) {
        commit('SET_SOURCES', response.data.sources);
      }
    });
};

export const updateHistory = ({ commit }, payload) => {
  commit('SET_HISTORY', payload);
};
