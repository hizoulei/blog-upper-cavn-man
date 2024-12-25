/**
 * 用户服务
 */
import UserModel from '../model/user_model';
import { createUserType, userInfo, userInfoType } from '../types/user_type';
import { filterUndefined } from '../utils';
/**
 * 查看用户信息
 */

export const getUserInfo = async ({ id, account, phone, email }: userInfo) => {
  let whileOpt = filterUndefined({
    id,
    account,
    phone,
    email,
  });
  console.log(whileOpt);
  let res = await UserModel.findOne({
    attributes: ['id', 'account', 'phone', 'email', 'password', 'nickname', 'avatar', 'address'],
    where: whileOpt,
  });
  return res ? res.dataValues : null;
};
/**
 * 创建用户
 */
export const createUserService = async (data: createUserType): Promise<userInfoType> => {
  // 创建用户
  let user = await UserModel.create({
    ...data,
  });
  let res: userInfoType = user.dataValues;
  return res;
};
