import { DataTypes } from 'sequelize';
import seq from '../DB/seq';

const ArticleModel = seq.define(
  'article',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: '文章名称',
      validate: {
        len: [4, 10],
      },
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '文章标签',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '文章内容',
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '文章封面',
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '作者id',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '文章状态 0:草稿 1:发布 2:未发布',
    },
  },
  {
    paranoid: true,
    timestamps: true, // 不删除数据库记录，但会设置一个deleteAt时间
  }
);
// 同步模型到数据库
// ArticleModel.sync({ force: true });

export default ArticleModel;
