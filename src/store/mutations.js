export const SET_LIVE_NEWS_FEED = (state, articles) => {
  state.articles = articles;
};

export const UPDATE_LOADING = (state) => {
  state.loading = !state.loading;
};

export const SET_SOURCES = (state, sources) => {
  state.sources = sources;
};

export const INITIALISE = (state) => {
  const history = JSON.parse(localStorage.getItem('history'));
  if (history) {
    state.history = history;
  }
};

export const SET_HISTORY = (state, article) => {
  state.history.unshift(article);
  localStorage.setItem('history', JSON.stringify(state.history));
};

export const UPDATE_SEACH = (state, result) => {
  state.searchResults = result;
  state.loading = !state.loading;
};

export const UPDATE_TITLE = (state, payload) => {
  const temp = state.articles;
  const index = temp.findIndex((article) => JSON.stringify(`${article.author}-${article.publishedAt}`) === payload.id);
  temp[index].title = payload.title;
  state.articles = temp;
};
