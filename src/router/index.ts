import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/pages/home/home.vue') },
  { path: '/login', component: () => import('@/pages/login/login.vue') },
  { path: '/userManage/userInfo', component: () => import('@/pages/userManage/userInfo/index.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;