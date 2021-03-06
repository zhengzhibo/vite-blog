import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'posts',
    component: Posts,
    props: true,
  },
];

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
