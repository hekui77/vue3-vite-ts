import Mock from 'mockjs';

Mock.mock('/usersInfo/login', {
  code: 0,
  data: {
    token: '@word(50)'
  },
  message: 'ok'
});

Mock.mock('/usersInfo/find', {
  code: 0,
  data: {
    username: '@cname',
    'age|1-100': 20,
  },
  message: 'ok'
});