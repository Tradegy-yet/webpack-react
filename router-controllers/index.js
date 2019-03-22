const outputObject = require("../router-public").outputObject;
const path = require("path");
const Handle = require("../router-public").Handle;
const fs = require("fs");

class Index{
  constructor(){
    // this.getFavicon = new Handle("/favicon.ico","get","handle",
    // async function(ctx,next){
    //   console.log("请求 favicon.ico...");
    //   // 获取文件完整路径:
    //   let fp = path.join(__dirname,"../public", "images","favicon.ico");
    //   console.log(`请求文件路径：${fp}`);
    //   ctx.set({"Content-Type":"image/x-icon"})
    //   var body = fs.readFileSync(fp,"binary")
    //   ctx.length = Buffer.byteLength(body);
    //   // console.log(fs.readFileSync(fp,"binary"));
    //   ctx.response.body = body;
    //   await next();
    // })

    this.getIndex = new Handle("/","get","handle",
    async function(ctx,next){
      console.log("请求 index...")
      ctx.redirect("/index.html")
      await next();
    })

    this.getIndexPipe = new Handle("/","get","pipline",
    async function(ctx,next){
      console.log("过滤 index...")
      await next();
    })

    this.postSignin = new Handle("/signin","post","handle",
    async function(ctx,next){
      let res = ctx.request.body;
      ctx.response.type = "text/json";
      ctx.response.body = res;
      await next();
    })
  }
}
module.exports = outputObject(new Index());


// let getIndex = async function(ctx,next){
  
//   console.log("请求 index...")
//   ctx.response.body = `<h1>Index</h1>
//   <form action="/signin" method="post">
//       <p>Name: <input name="name" value="koa"></p>
//       <p>Password: <input name="password" type="password"></p>
//       <p><input type="submit" value="Submit"></p>
//   </form>`
//   await next();
// }
// let filterIndex = async function(ctx,next){
//   console.log("过滤 index...")
//   await next();
// }
// let postSignin = async function(ctx,next){
//   let res = ctx.request.body;
//   ctx.response.type = "text/json";
//   ctx.response.body = res;
//   await next();
// }
// module.exports = {
//   "GET:/":{"haddle":getIndex,"piplines":filterIndex},
//   "POST:/signin": postSignin,
// }
