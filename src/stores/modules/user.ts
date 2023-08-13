import { getUserInfoApi, loginApi } from '@/api/userInfo';
import { getToken, removeToken, setToken } from '@/utils/cookies';
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
  const defaultUserInfo = () => ({
    username: '',
    age: 0
  });
  const token = ref<string>(getToken() || '');
  const userInfo = reactive(defaultUserInfo());

  /** 获取用户详情 */
  const getInfo = async () => {
    const { data } = await getUserInfoApi();
    userInfo.username = data.username;
    userInfo.age = data.age;
  };

  /** 登录 */
  const login = async (prams: { userName: string; passWord: string; }) => {
    const { data } = await loginApi(prams);
    setToken(data.token);
    token.value = data.token;
  };

  /** 退出 */
  const logout = async () => {
    removeToken();
    token.value = '';
    userInfo.username = '';
    userInfo.age = 0;
  };


  return { token, userInfo, login, logout, getInfo };
});