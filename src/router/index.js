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
    path: '/sobre',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contato',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
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
    props: { name: 'batata kennebec' },
  },
  {
    path: '/produto/bintje',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'batata bintje' },
  },
  {
    path: '/produto/ratte',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'batata ratte' },
  },
  {
    path: '/produto/vitelotte',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    props: { name: 'vitelotte' },
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
