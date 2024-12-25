const errHandler = {
  userFormat: {
    code: '10001',
    message: '账户和密码格式不正确',
  },
  userExist: {
    code: '10002',
    message: '账户已存在',
  },
  createUserError: {
    code: '10003',
    message: '创建用户失败',
  },
  userLoginError: {
    code: '10004',
    message: '账户和密码不正确',
  },
  userLoginErrors: {
    code: '10005',
    message: '登录失败',
  },
};
export default errHandler;
