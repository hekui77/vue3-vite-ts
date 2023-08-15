import { request } from '@/utils/service';
import type * as Tyep from './type';

/** 登录并返回 Token */
export function loginApi(data: { userName: string; passWord: string; }) {
  return request<ApiResponseData<{ token: string }>>({
    url: '/api/usersInfo/login',
    method: 'post',
    data
  });
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<ApiResponseData<Tyep.UserInfoData>>({
    url: '/api/usersInfo/find',
    method: 'get'
  });
}

