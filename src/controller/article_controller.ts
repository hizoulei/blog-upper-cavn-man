/**
 * 文章控制器
 */
import { createArticleService, getArticleServiceList } from '../service/article_service';

import { Context } from 'koa';
import { articleParams, articleType } from '../types/article_type';
/**
 *  获取文章列表
 * @param ctx 上下文
 */
export const getArticleList = async (ctx: Context) => {
  const { page_index, page_size }: articleParams = ctx.query as articleParams;
  try {
    const articleList = await getArticleServiceList({ page_index, page_size });
    ctx.body = {
      code: 200,
      data: articleList,
      message: 'success',
    };
  } catch (e) {
    ctx.body = {
      code: 500,
      message: e,
    };
  }
};

/***
 *  创建文章
 * @param ctx 上下文
 */
export const createArticle = async (ctx: Context) => {
  const data: articleType = ctx.request.body as articleType;
  console.log(data, 'body566666666666665555555555555555555555555');
  try {
    const article = await createArticleService(data);
    ctx.body = {
      code: 200,
      data: article,
      message: 'success',
    };
  } catch (e: any) {
    ctx.body = {
      code: 500,
      message: e.errors[0].message,
    };
  }
};
