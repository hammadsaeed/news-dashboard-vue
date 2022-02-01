export const SET_LIVE_NEWS_FEED = (state, articles) => {
  state.articles = articles;
};

export const UPDATE_LOADING = (state) => {
  state.loading = !state.loading;
};
