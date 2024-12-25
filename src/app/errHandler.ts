import Koa from 'koa';

export default (err: { code: string; message: string }, ctx: Koa.Context) => {
  let status = 200;
  switch (err.code) {
    case '10001':
      status = 400;
      break;
    case '10002':
      status = 409;
      break;
    default:
      status = 200;
  }
  ctx.status = status;
  ctx.body = err;
};
