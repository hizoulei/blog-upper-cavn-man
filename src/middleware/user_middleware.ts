/**
 * 用户中间件
 */

import { Context, Next } from 'koa';

/**
 * 用户登录验证
 */
export const userVerify = async (ctx: Context, next: Next) => {
  const { userName, password } = ctx.request.body;
  await next();
};
