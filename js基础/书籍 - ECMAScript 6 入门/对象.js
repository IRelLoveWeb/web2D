/*
1.对象中属性和方法的简写
  1.> var x = 1 ;obj = {x} ==> obj = {x:x}
  2.> obj = { test(){}} ==> obj = {test:function(){}}

2. obj = { ['tt' + a](){},[b]:'b'} ==>字面量声明对象时也可以用变量了

3.object.is(a,b) ==>a,b是否相等
  例子: Object.is(+0, -0) // false
		Object.is(NaN, NaN) // true

4.Object.assign(target,obj1,obj2) ==>用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象
  1.>Object.assign(target) ==>只有一个参数,如果target为对象就返回target,否则将target转化为对象返回
  2.>只可以拷贝自身的可枚举的属性,浅拷贝,对象的引用
  3.>可以用来处理数组，但是会把数组视为对象 
  	 Object.assign([1, 2, 3], [4, 5]) //[4,5,3]	
  4.克隆对象保持继承链
  	let originProto = Object.getPrototypeOf(tt);
  	Object.assign(Object.create(originProto),tt);

5. 获取对象属性的描述对象 Obect.getOwnPropertyDescriptor(obj,property);
   ps： Object.keys(obj) ==》循环key键,obj自身可枚举的属性

6. __proto__读取或设置当前对象的prototype对象,值就是对象的原型
   Object.setPrototypeOf(obj,protoObj)（写操作）、Object.getPrototypeOf(obj)（读操作）、Object.create(protoObj)（生成操作）

7. Object.keys(obj),Object.values(),Object.entries() //可枚举非继承的属性
  ps： 对象转为真正的Map结构
       var obj = { foo: 'bar', baz: 42 };  var map = new Map(Object.entries(obj));

8.获取对象所有属性的描述对象 Obect.getOwnPropertyDescriptors(obj);

9.构建对象的方法：
  1.> const obj = {__proto__:proto,foo:123}
  2.> const obj = Object.create(proto) obj.foo = 123;
  3.> const obj = Object.assign(Object.create(proto),{foo:123})//如果新对象继承性保持一致  proto = Object.getProttypeOf(obj)
  4.> const obj = Object.create(proto,Object.getOwnPropertyDescriptors({foo:123}))//原型 属性{ x: { value: 1, writable: true, enumerable: true, configurable: true } }

10.每一个对象都有自己的构造函数
   var s = {}  s.constructor === Object;
   function Test(){}  var t = new Test();   t.constructor === Test;
   且 t.prototype.constructor === Test;
   如果 t.prototype = {}  那么  t.prototype.constructor就是{}的constructor即Object

*/