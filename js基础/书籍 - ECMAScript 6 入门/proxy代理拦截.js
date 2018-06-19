/*
1.Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

2.var proxy = new Proxy(target,handler);
  target是目标元素,handler是拦截处理 ,都是一个对象
  要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作
  handler 为空对象,那相当于返回了target,但不是真的返回了target

3.Proxy 中handle可以拦截的 proxy实例方法
    （1）get(target, propKey, receiver)
    拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    最后一个参数receiver是一个对象，可选，参见下面Reflect.get的部分。

    （2）set(target, propKey, value, receiver)
    拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    
    （3）has(target, propKey)
    拦截propKey in proxy的操作，返回一个布尔值。

    （4）deleteProperty(target, propKey)
    拦截delete proxy[propKey]的操作，返回一个布尔值。

    （5）ownKeys(target)
    拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

    （6）getOwnPropertyDescriptor(target, propKey)
    拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

    （7）defineProperty(target, propKey, propDesc)
    拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

    （8）preventExtensions(target)
    拦截Object.preventExtensions(proxy)，返回一个布尔值。

    （9）getPrototypeOf(target)
    拦截Object.getPrototypeOf(proxy)，返回一个对象。

    （10）isExtensible(target)
    拦截Object.isExtensible(proxy)，返回一个布尔值。

    （11）setPrototypeOf(target, proto)
    拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。

    如果目标对象是函数，那么还有两种额外操作可以拦截。
    （12）apply(target, object, args)
    拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

    （13）construct(target, args)
    拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。  

4.一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错

5. let {proxy,revoke} = Proxy.revocable(target,handler);
    Proxy.revocable方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。上面代码中，当执行revoke函数之后，再访问Proxy实例，就会抛出一个错误。
    Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问

6. var obj = {getx(){console.log(1)}} ; var proxy = new Proxy(obj,{getx(){console.log(2)}})
   原始对象中自定义的方法,Proxy实例可以调用,但是无法设置拦截函数
   proxy.getx() // 1 而不是 2

7. 目标对象还是目标对象,拦截操作是作用在proxy对象实例上的;   
*/