import Koa from 'koa';
import router from '../router/index';
const app = new Koa()

app.use(router.routes())
// 处理无效路由
app.use(async (ctx) => {
    ctx.status = 404; // 设置状态码为 404
    ctx.body = {
        message: '404 Not Found',
        requestedUrl: ctx.request.url
    };
});

export default app
