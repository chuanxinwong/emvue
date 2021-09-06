import Vue from 'vue';
import VueRouter from 'vue-router';

import home from "./home";

Vue.use(VueRouter);

const routes = [
  ...home,
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes,
})

export default router