import Router from '@koa/router'

const router = new Router({
  prefix: '/user',
})

router.get('/', async (ctx, next) => {
  ctx.body = 'user'
})

export default router
