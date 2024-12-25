import Koa from 'koa';
import { koaBody } from 'koa-body';
import router from '../router/index';
import errHandler from './errHandler';
const app = new Koa();

app.use(
  koaBody({
    multipart: true, // 支持文件上传
    parsedMethods: ['POST' as any, 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use(router.routes());
// 处理无效路由
app.use(async (ctx) => {
  ctx.status = 404; // 设置状态码为 404
  ctx.body = {
    message: '404 Not Found',
    requestedUrl: ctx.request.url,
  };
});
app.on('error', errHandler);

export default app;
