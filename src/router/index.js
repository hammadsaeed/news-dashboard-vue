import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List';
import Detail from '../views/Detail';
import History from '../views/History';
import Search from '../views/Search';
import Err from '../views/Error';
import BadRequest from '../views/BadRequest';

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
    path: '/fail-request',
    name: 'BadRequest',
    component: BadRequest,
  },
  {
    path: '/search/query=:text',
    name: 'Search',
    component: Search,
    props: true,
  },
  {
    path: '/error/:type/:message',
    name: 'Error',
    component: Err,
    props: true,
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
