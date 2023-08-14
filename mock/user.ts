import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/usersInfo/login',
    timeout: 1000,
    method: 'post',
    response: config => {
      return {
        code: 0,
        data: { token: '@string(50)' },
        message: ''
      };
    }
  },
  {
    url: '/api/usersInfo/find',
    method: 'get',
    timeout: 2000,
    response: config => {
      return {
        code: 0,
        data: {
          username: '@cname',
          'age|1-100': 0
        },
        message: ''
      };
    }
  },
] as MockMethod[];