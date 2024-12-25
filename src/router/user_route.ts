import Router from '@koa/router';

import { createUser } from '../controller/user_controller';
import {
  passwordEncrypt,
  userExist,
  userInfoDefault,
  userRegisterVerify,
  userVerify,
} from '../middleware/user_middleware';

const router = new Router({
  prefix: '/user',
});

router.get('/login', userVerify);

router.post(
  '/register',
  userRegisterVerify,
  userExist,
  passwordEncrypt,
  userInfoDefault,
  createUser
);

export default router;
