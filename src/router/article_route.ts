/***
 * 文章路由
 */
import Router from '@koa/router';
import { getArticleList, createArticle } from '../controller/article_controller';
const router = new Router();
// 获取文章列表
router.get('/article', getArticleList);
//获取文章详情
router.get('/article/:id');
// 创建文章
router.post('/article', createArticle);
// 更新文章
router.put('/article/:id', async (ctx, next) => {});
// 删除文章
router.delete('/article/:id', async (ctx, next) => {});

export default router;
