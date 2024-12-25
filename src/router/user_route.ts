import Router from '@koa/router';

import { createUser, userLogin } from '../controller/user_controller';
import {
  passwordEncrypt,
  userExist,
  userInfoDefault,
  userLoginVerify,
  userRegisterVerify,
} from '../middleware/user_middleware';

const router = new Router({
  prefix: '/user',
});

router.post('/login', userRegisterVerify, userLoginVerify, userLogin);

router.post(
  '/register',
  userRegisterVerify,
  userExist,
  passwordEncrypt,
  userInfoDefault,
  createUser
);

export default router;
