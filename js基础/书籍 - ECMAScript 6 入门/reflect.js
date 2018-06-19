Reflect.apply(target,thisArg,args)
Reflect.construct(target,args)
Reflect.get(target,name,receiver)
Reflect.set(target,name,value,receiver)
Reflect.defineProperty(target,name,desc)
Reflect.deleteProperty(target,name)
Reflect.has(target,name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)


//Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
1.
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target,name, value, receiver);
    if (success) {
      log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});

2.
Reflect.apply(Math.floor, undefined, [1.75]) // 1
const youngest = Reflect.apply(Math.min, Math, ages);

3.
function Greeting(name) {
  this.name = name;
}

// new 的写法
const instance = new Greeting('张三');

// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);


PS:Reflect的方法一般用来处理proxy实例的默认行为
    Proxy实际是在目标对象进行操作时添加一些额外的操作
    
var proxy = new Proxy({x:1},{
    set(target,name,value){
        Reflect.set(target,name,value)//对target对象进行赋值(默认操作,也可以不进行默认操作)
    },
    get(target,name){
        var vMr = Reflect.get(target,name);//获取目标对象中的属性值
        return v;//返回的值(可以是vMr是v)
    },
    ownKeys(target){
        var vMr = Reflect.ownKeys(target);//目标对象中所有的键

        return v; //返回的值要和vMr的类型一致,且有效
    }
})