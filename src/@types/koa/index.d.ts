// src/@types/koa/index.d.ts
import 'koa';

declare module 'koa' {
  interface Context {
    request: {
      body: any; // 或者更具体的类型
    };
  }
}
