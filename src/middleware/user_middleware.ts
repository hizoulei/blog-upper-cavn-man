/**
 * 用户中间件
 */
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import { Context, Next } from 'koa';

import errHandler from '../constant/err.constant';
import { getUserInfo } from '../service/user_service';
import { getNumberUid } from '../utils';
/**
 * 用户登录参数验证
 */
export const userVerify = async (ctx: Context, next: Next) => {
  const schema = Joi.object({
    账户: Joi.string().allow('').required(),
    密码: Joi.number().min(18).max(35),
    skill: Joi.array().items(Joi.string()).length(3),
  });

  const { userName, password } = ctx.request.body;
  await next();
};
/**
 * 用户注册参数验证
 */
export const userRegisterVerify = async (ctx: Context, next: Next) => {
  const schema = Joi.object({
    account: Joi.string()
      .min(6)
      .max(12)
      .regex(/^[a-zA-Z]\w{6,12}$/)
      .required(),
    password: Joi.string()
      .regex(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)
      .required(),
  });
  const data = ctx.request.body;
  let result = schema.validate(data);
  if (result.error) {
    ctx.app.emit('error', errHandler.userFormat, ctx);
  }
  await next();
};
/**
 * 用户是否存在
 */
export const userExist = async (ctx: Context, next: Next) => {
  const { account } = ctx.request.body;

  let res = await getUserInfo({ account });
  if (res !== null) {
    ctx.app.emit('error', errHandler.userExist, ctx);
  }
  await next();
};
/**
 * 密码加密
 */
export const passwordEncrypt = async (ctx: Context, next: Next) => {
  const { password } = ctx.request.body;
  try {
    ctx.request.body.password = bcrypt.hashSync(password, 10);
  } catch (e) {
    console.error('密码加密失败', e);
    return;
  }
  await next();
};

/**
 * 用户信息默认值
 */
export const userInfoDefault = async (ctx: Context, next: Next) => {
  ctx.request.body.nickname = '用户' + getNumberUid();
  await next();
};
