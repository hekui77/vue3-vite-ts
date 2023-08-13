
import isWhiteList from '@/config/routeWhiteList';
import { getToken } from '@/utils/cookies';
import router from '@/router/index';

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
