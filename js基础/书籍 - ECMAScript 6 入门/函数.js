/*
1.参数默认值  实参的值为undefined或没有值,形参值才等于 默认值
  function test(x=2){}  test()

2.function m1({x=0,y=0} = {}){} function m2({x,y} = {x=0,y=0}){}
  PS: m1,m2的参数都有默认值,如果
  1.实参有值,则m1,m2的形参都等于实参，再解构
  2.实参没有值 m1的参数默认值为{},m2的参数默认值为{x=0,y=0},再解构

3.默认参数会在调用时产生一个 形同用let生成的作用域
  巧妙使用：
    function throwIfMissing() { throw new Error('Missing parameter'); }
    function foo(mustBeProvided = throwIfMissing()) { return mustBeProvided; }
    foo()  // Error: Missing parameter

4.rest参数   获取函数的多余参数
  例子：function add(...values){}   add(2, 5, 3)

5.扩展运算符 ...  一个数组转为用逗号分隔的参数序列,只能在一个环境中
[...[1,2,3]] ==> [1,2,3]
  巧妙运用：
  1.>Math.max(...[1,2,3,4]) arr.push(...arr1)
  2.>合并数组 [1,2,3,...arr2]
  3.>生成数组 [a,...rest] = [1,2,3,4] //a=1,rest = [2,3,4]
     ps：将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
  4.将字符串解析为数组 [...'abc'] ==>['a','b','c']
  5.具有Iterator接口的对象，都可以使用扩展运算符 

6.使用“箭头”（=>）定义函数,箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
  1.> (n1,n2)=> n1+n2;  ==> function(n1,n2){return n1+n2;}
  2.> 如果需要返回一个对象,那么 () => ({x:2}),否则{x:2}会被动作代码块处理,必须加个括号
  3.> 箭头函数导致this总是指向函数定义生效时所在的对象,箭头函数没有自己的this,不能用call()、apply()、bind()这些方法去改变this的指向

7.知道循环可以用递归代替，而一旦使用递归，就最好使用尾递归(不懂)
*/ 