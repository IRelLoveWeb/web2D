/*var person = {
    name:"张三"
}

var proxy = new Proxy(person,{
    get(target,property){
        if(property in target){
            return target[property]
        }else{
            throw new Error(`this property ${property} is not in ${target}`);
        }
    }
})*/

/*
let proto = new Proxy({},{
    get(target,property){
        return target[property]
    }
})

let obj = Object.create(proto);

obj.xxx // 只有xxx属性不在obj中,使得obj读取原型中的属性时,才会激发拦截

拦截操作只部署在了Proxy实例上,其后代没有部署

*/

