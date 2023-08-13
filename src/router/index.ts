import { getToken } from '@/utils/cookies';
import { createRouter, createWebHashHistory, type RouteRecordRaw, RouteLocationNormalized } from 'vue-router';


const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/pages/home/home.vue') },
  { path: '/login', component: () => import('@/pages/login/login.vue') },
  { path: '/userManage/userInfo', component: () => import('@/pages/userManage/userInfo/index.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 免登录白名单（匹配路由 path）
const whiteListByPath: string[] = ['/login', '/'];
// 免登录白名单（匹配路由 name）
const whiteListByName: string[] = [];

// 判断是否在白名单
const isWhiteList = (to: RouteLocationNormalized) => {
  // path 和 name 任意一个匹配上即可
  return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name as string) !== -1;
};

router.beforeEach((to, _from, next) => {
  // 判断该用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      // 如果已经登录，并准备进入 login 页面，则重定向到主页
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    // 如果没有 Token
    if (isWhiteList(to)) {
      // 如果在免登录的白名单中，则直接进入
      next();
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next('/login');
    }
  }
});

export default router;