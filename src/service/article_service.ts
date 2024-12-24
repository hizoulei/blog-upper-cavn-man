import createArticleModel from '../model/article_model';
import { articleParams, articleType } from '../types/article_type';
/**
 *文章服务
 */
export const getArticleServiceList = async (params: articleParams) => {
  return createArticleModel.findAll({
    order: [['id', 'DESC']],
    offset: (params.page_size ?? 1 - 1) * (params.page_index ?? 10),
    limit: params.page_size,
    attributes: { exclude: ['deletedAt'] }, // 排除字段
  });
};
/**
 * 创建文章
 * @param body 文章信息
 * @returns
 */
export const createArticleService = (body: articleType) => {
  return createArticleModel.create(body as any);
};
