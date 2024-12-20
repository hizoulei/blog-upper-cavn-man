import Router from "@koa/router";
import fs from 'fs';
import config from '../config/config.default';
//添加前缀路由
const router = new Router({
  prefix:config.APP_PREFIX
});

fs.readdirSync(__dirname).forEach(async file => {
  if (file != 'index.ts') {
    let res = await import(`./${file}`);
    router.use(res.default.routes()); //注册路由
  }
})

export default router;
