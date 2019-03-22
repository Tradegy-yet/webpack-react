const fs = require("fs")
const path = require("path")
const router = require("koa-router")();

function controller(dir){
  let controller_dir = dir || 'router-controllers';
      files = fs.readdirSync(path.join(__dirname,controller_dir));
  var controllers = files.filter((f)=>{
    return f.endsWith(".js");
  })
  for(let controller of controllers){
    // 导入controllers 里的每个controller 文件
    let controller_path = require(path.join(__dirname,controller_dir,controller));
    // 将controller 里的每个路径注册
    registerUrl(controller_path);
  }
}
function registerUrl(path){
  for(let url in path){
    // get请求
    if(url.startsWith("GET:")){
      try{
        router.get(url.replace("GET:",""),path[url]["piplines"])
      }catch(e){}
      router.get(url.replace("GET:",""),path[url]["handle"])
    }
    // post请求
    if(url.startsWith("POST:")){
      router.post(url.replace("POST:",""),path[url]["handle"])
    }
  }
}
module.exports = function(){
  controller();
  return router.routes();
}