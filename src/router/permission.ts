
import isWhiteList from '@/config/routeWhiteList';
import { getToken } from '@/utils/cookies';
import router from '@/router/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/stores/modules/user';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, _from, next) => {
  NProgress.start();
  // 判断该用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      // 如果已经登录，并准备进入 login 页面，则重定向到主页
      next({ path: '/' });
    } else {
      // 判断是否有个人信息
      if (!useUserStore().userInfo.username) {
        await useUserStore().getInfo();
      }
      // 获取个人信息
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

router.afterEach(() => {
  NProgress.done();
});
