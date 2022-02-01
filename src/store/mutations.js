export const SET_LIVE_NEWS_FEED = (state, articles) => {
  state.articles = articles;
};

export const LOADING = (state, news) => {
  console.log(state.loading, news);
};
