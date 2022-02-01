export const config = {
  newsApiEndpoint: process.env.VUE_APP_API_ENDPOINT || 'https://newsapi.org/v2',
  newApiKey: process.env.VUE_APP_API_KEY,
};

export default config;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=4dfa068957db4fb6b0c895e2355b5797
