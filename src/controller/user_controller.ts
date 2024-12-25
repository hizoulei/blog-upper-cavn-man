/**
 * 用户控制
 */

import jwt from 'jsonwebtoken';
import { Context } from 'koa';
import config from '../config/config.default';
import errHandler from '../constant/err.constant';
import { createUserService, getUserInfo } from '../service/user_service';
import { createUserType } from '../types/user_type';
/**
 * 创建用户
 * @param ctx 上下文
 */
export const createUser = async (ctx: Context) => {
  const { account, password, nickname }: createUserType = ctx.request.body;
  try {
    let result = await createUserService({ account, password, nickname });
    let token = jwt.sign(
      {
        userId: result.id,
        account: result.account,
      },
      config.APP_JWT_SECRET as string,
      { expiresIn: '24h' }
    );
    ctx.body = {
      code: 200,
      message: 'success',
      data: {
        token,
        ...result,
        password: undefined,
      },
    };
  } catch (err) {
    console.error('创建用户失败', err);
    ctx.app.emit('error', errHandler.createUserError, ctx);
  }
};
/**
 * 用户登录
 */
export const userLogin = async (ctx: Context) => {
  const { account, password } = ctx.request.body;
  try {
    let result = await getUserInfo({ account });
    if (result === null) {
      ctx.app.emit('error', errHandler.userLoginErrors, ctx);
      return;
    }
    let token = jwt.sign(
      {
        userId: result.id,
        account: result.account,
      },
      config.APP_JWT_SECRET as string,
      { expiresIn: '24h' }
    );
    ctx.body = {
      code: 200,
      message: 'success',
      data: {
        token,
        ...result,
        password: undefined,
      },
    };
  } catch (err) {
    console.error('用户登录失败', err);
    ctx.app.emit('error', errHandler.userLoginErrors, ctx);
  }
};
