import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List';
import Detail from '../views/Detail';
import History from '../views/History';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: List,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/:type/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
