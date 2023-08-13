import { request } from '@/utils/service';

/** 登录并返回 Token */
export function loginApi(data: { userName: string; passWord: string; }) {
  return request<ApiResponseData<{ token: string }>>({
    url: 'usersInfo/login',
    method: 'post',
    data
  });
}