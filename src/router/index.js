import Vue from 'vue';
import VueRouter from 'vue-router';

import account from "./account";

Vue.use(VueRouter);

const routes = [
  ...account,
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes,
})

export default router