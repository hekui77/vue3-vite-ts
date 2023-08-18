import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
const Layouts = () => import('@/layouts/index.vue');

export const routes: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/errorPage/404.vue'), meta: { hidden: true } },
  {
    path: '/redirect',
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index.vue')
      }
    ]
  },
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
          affix: true
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
  {
    path: '/menuManage',
    component: Layouts,
    redirect: '/menuManage/index',
    meta: {
      title: '菜单管理',
      svgIcon: 'menu',
    },
    children: [
      {
        path: '/menuManage/index',
        component: () => import('@/pages/menuManage/index.vue'),
        name: 'menuManage',
        meta: {
          title: '菜单管理',
          svgIcon: 'menu',
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;