import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
const Layouts = () => import('@/layouts/index.vue');

export const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/pages/login/login.vue'), meta: { hidden: true } },
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
          svgIcon: 'dashboard',
        }
      }
    ]
  },
  {
    path: '/userManage',
    component: Layouts,
    redirect: '/userManage/index',
    meta: {
      title: '用户管理',
      svgIcon: 'users',
    },
    children: [
      {
        path: '/userManage/index',
        component: () => import('@/pages/userManage/userManage/index.vue'),
        name: 'userManage',
        meta: {
          title: '用户管理',
          svgIcon: 'users',
        }
      },
      {
        path: '/userManage/userInfo',
        component: () => import('@/pages/userManage/userInfo/index.vue'),
        name: 'userInfo',
        meta: {
          title: '个人信息',
          svgIcon: 'user',
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