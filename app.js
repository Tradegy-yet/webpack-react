const Koa = require("koa");
const path = require("path")
const bodyParser = require("koa-bodyparser");
const favicon = require("koa-favicon")
const routerController = require("./router-controller");
const koaStatic = require('koa-static');

const app = new Koa();

// 相对于 app.js 的路径
const staticPath = path.join( __dirname,'./public');
// console.log(staticPath)
// // 使用中间件
app.use(koaStatic(staticPath));
app.use(favicon('./public/images/favicon.ico'))
app.use(bodyParser());
// 开始
app.use(async (ctx,next)=>{
  console.log(`request start:${ctx.url}`);
  await next();
});
app.use(routerController())
// 结束
app.use(async (ctx,next)=>{
  console.log(`request end:${ctx.url}`);
  await next();
});
app.listen(3000);
console.log("app started at post 3000");