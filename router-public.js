
class Handle{
  constructor(url,method,type,handle){
    this.url = url;
    this.handle = handle;
    this.method = method;
    this.type = type
  }
}
function outputObject(controller){
  let properties = Object.getOwnPropertyNames(controller)
  let object = {}
  for(let handle of properties){
    let pro_url = controller[handle].url
    let pro_method = controller[handle].method
    let pro_handle = controller[handle].handle
    let pro_type = controller[handle].type
    if(pro_method=="get"){
      if(object["GET:"+pro_url]===undefined){
        object["GET:"+pro_url] = {}
      }
      if(pro_type=="handle"){
        object["GET:"+pro_url]["handle"] = pro_handle
      }
      if(pro_type=="pipline"){
        object["GET:"+pro_url]["piplines"] = pro_handle
      }
    }
    if(pro_method=="post"){
      if(object["POST:"+pro_url]===undefined){
        object["POST:"+pro_url] = {}
      }
      if(pro_type=="handle"){
        object["POST:"+pro_url]["handle"] = pro_handle
      }
      if(pro_type=="pipline"){
        object["POST:"+pro_url]["piplines"] = pro_handle
      }
    }
  }
  return object;
}

module.exports.outputObject = outputObject
module.exports.Handle = Handle