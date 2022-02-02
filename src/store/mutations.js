import router from '../router';

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

export const HANDLE_ERROR = (state, error) => {
  if (router.currentRoute.params.type) {
    return;
  }
  if (error.response) {
    router.push(`error/${error.response.status}/${error.response.data.message}`);
  } else if (error.request) {
    const message = 'No response recieved';
    router.push(`error/500/${message}`);
  } else {
    router.push(`error/500/${error.message}`);
  }
  state.loading = false;
};
