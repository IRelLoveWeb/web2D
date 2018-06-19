/*
ps：
1.模式匹配 => 只要等号两边的模式相同，左边的变量就会被赋予对应的值
2.解构模式右侧必须有Iterator接口;左边为模式,右边为对应的值
3.默认值: 如果右侧严格等于undefined,那么默认值才会起效
  例子: let [x = 1] = []; //x=1
        let [x = 2] = [undefined]; //x=2
        let [x = 3] = [null]; //x=null

        if([null][0] === undefined){
            x = 3
        }else{
            x = [null][0]
        }
  即只有解构对象的值严格等于undefined,解构的默认值才会起效果


4.对象解构:先找到同名属性，然后再赋给对应的变量,此时变量的声明和赋值是一体
  let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };//foo = 'aaa' bar = "bbb"

  let { foo: f, bar: b } = {foo: "aaa", bar: "bbb"} //f = 'aaa' b = 'bbb'
  foo是一个用来解构的模式(寻找同名属性),正真的变量的是f

  var {x:y = 3} = {x: 5}; //y=5
  模式x找到同名属性x,此时如果属性x的值为undefined,那么变量y=3,但是x=5(不为undefined),所以y=5
 
  一般直接覆盖默认值,只有没有值时默认值才起效果(即只有属性的值为undefined时,默认值才会其效果;)
  开拓：1. let { log, sin, cos } = Math;
        2. let arr = [1, 2, 3];  let {0 : first, [arr.length - 1] : last} = arr;


  注意:数组解构是按照顺序来依次解构
       对象解构是按照相同属性名来解构,与顺序无关

5.扩展运算符 ...
  [...[1,2,3]]  [...'123213'] [...new Set([1,2,3])] [...new Map([[1,2],[3,4])]
   只要具有interator接口的数据结构都可以使用...
*/


问题:函数的参数解构问题
