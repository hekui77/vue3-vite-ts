import Mock from 'mockjs';

Mock.mock('/usersInfo/login', {
  code: 0,
  data: {
    token: '@word(50)'
  },
  message: 'ok'
});