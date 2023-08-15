import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
const Layouts = () => import('@/layouts/index.vue');

const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/pages/login/login.vue') },
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/home/home.vue'),
      }
    ]
  },
  {
    path: '/userManage',
    component: Layouts,
    redirect: '/userManage/userInfo',
    children: [
      {
        path: '/userManage/userInfo',
        component: () => import('@/pages/userManage/userInfo/index.vue'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;