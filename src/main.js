import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  async beforeCreate() {
    this.$store.dispatch('getNewsFeed');
    this.$store.dispatch('getSources');
  },
  render: (h) => h(App),
}).$mount('#app');
