/**
 * 用户表
 */

import { DataTypes } from 'sequelize';
import seq from '../DB/seq';

const UserModel = seq.define(
  'user',
  {
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: '账户',
      validate: {
        len: [6, 12],
      },
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: '',
      comment: '密码',
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '昵称',
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
      comment: '头像',
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
      comment: '地址',
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
      comment: '手机号',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
      comment: '邮箱',
    },
  },
  {
    paranoid: true,
    timestamps: true, // 不删除数据库记录，但会设置一个deleteAt时间
  }
);
// UserModel.sync({ force: true }); // 强制同步数据库

export default UserModel;
