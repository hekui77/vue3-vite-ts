import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/pages/home/home.vue') },
  { path: '/login', name: 'login', component: () => import('@/pages/login/login.vue') },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;