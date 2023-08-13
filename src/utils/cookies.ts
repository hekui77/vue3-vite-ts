/** 统一处理 Cookie */

import Cookies from 'js-cookie';

const key = 'token';

export const getToken = () => {
  return Cookies.get(key);
};
export const setToken = (token: string) => {
  Cookies.set(key, token);
};
export const removeToken = () => {
  Cookies.remove(key);
};
