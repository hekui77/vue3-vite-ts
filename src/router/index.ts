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
        name: 'dashboard',
        meta: {
          title: '首页',
        }
      }
    ]
  },
  {
    path: '/userManage',
    component: Layouts,
    redirect: '/userManage/userInfo',
    meta: {
      title: '用户管理',
    },
    children: [
      {
        path: '/userManage/userInfo',
        component: () => import('@/pages/userManage/userInfo/index.vue'),
        name: 'userInfo',
        meta: {
          title: '个人信息',
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;