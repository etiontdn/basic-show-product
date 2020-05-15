import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/produto/yukon',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'yukon gold' },
  },
  {
    path: '/produto/kennebec',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'kennebec potato' },
  },
  {
    path: '/produto/bintje',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'bintje potato' },
  },
  {
    path: '/produto/ratte',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'ratte potato' },
  },
  {
    path: '/produto/vitelotte',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'vitelotte potato' },
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
