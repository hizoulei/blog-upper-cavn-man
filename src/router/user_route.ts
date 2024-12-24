import Router from '@koa/router';
import { userVerify } from '../middleware/user_middleware';

const router = new Router({
  prefix: '/user',
});

router.get('/login', userVerify);

export default router;
