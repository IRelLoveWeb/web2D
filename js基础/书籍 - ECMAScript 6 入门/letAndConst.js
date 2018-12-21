/*
PS：
1.如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域
  暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
2. var,let 都是声明变量 
3. 同一个块级结构下不能用let声明同一变量;块级作用域下let声明的变量,作用域外无法调用

4. let,var,const 声明的变量可以在块级结构(var 只有函数作用域中)中覆盖父级的声明;const声明时必须赋值.
*/


/*

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();

var b = [];
for (let i = 0; i < 10; i++) {
  b[i] = function () {
    console.log(i);
  };
}
b[6]();


//没有变量声明提前
console.log(s);
let s;

let tmp = 25;
{
  //let tmp = 12;
  console.log(tmp);
}

//常量
const foo = {}; ==> foo指向对象的指针不变,对象的内容可变
如果要保证对象的属性不可添加修改等 Object.freeze(obj),但是obj对象的属性值不为可变对象
*/

let a = 1;
console.log(a);
console.log(window.a);

parseInt('100', 2) // 以二进制解析'10' , 值4
const a = 4
a.toString(2) // 将值4解析为二进制


