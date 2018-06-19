/*
1.类的修饰器
  1.>修饰器不带参数
  @minxi
  class Animal{}

  function minxi(target){
      target.say = ()=>console.log(1)
      target.prototype.run = ()=>console.log(2)
  }

  Animal.say();   new Animal().run()

  2.>修饰器带参数
  @minxi(...args)
  class Animal{}

  function minxi(...args){
      return function(target){
          target.length = args.length;
      }
  }
  Animal.length;

  3.>修饰器实在语言编译期间调用,函数的赋值是在运行期间

2.类中方法的修饰器
  class Animal{
      @enumerable
      name(){}
  }

  //修改属性的descriptor,或则添加提示
  function enumerable(target,name,descriptor){
      descriptor.enumerable = false;
      return descriptor;
  }

3.函数不能用修饰器,因为函数声明提升

*/