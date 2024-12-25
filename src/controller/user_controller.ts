/**
 * 用户控制
 */

import jwt from 'jsonwebtoken';
import { Context } from 'koa';
import config from '../config/config.default';
import errHandler from '../constant/err.constant';
import { createUserService } from '../service/user_service';
import { createUserType } from '../types/user_type';

export const createUser = async (ctx: Context) => {
  const { account, password, nickname }: createUserType = ctx.request.body;
  try {
    let result = await createUserService({ account, password, nickname });
    console.log(result);
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
        password: undefined, // 不返回密码
      },
    };
  } catch (err) {
    console.error('创建用户失败', err);
    ctx.app.emit('error', errHandler.createUserError, ctx);
  }
};
