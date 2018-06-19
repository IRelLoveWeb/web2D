/*
1.Generator 函数是一个状态机，封装了多个内部状态；
  generator函数返回一个遍历器对象,可以遍历内部的每一个状态(yield res)
  例子:
    function* gen(){yield 1; yield 2;return 3;}

 *2.Generator函数被调用后生成一个遍历器对象;调用遍历器自带的next()方法,返回{value:res,done:false}
   value就是Generator函数中的状态;  注:遍历器是一种数据处理的方式 it = gen() it.next()
   而return是函数的返回值 {value:3,done:true} 表示函数结束运行;
   在generator调用结束后再次调用next(),就会输出{value:undefined,done:true}

*3.对it进行for..of..遍历,得到的是 1,2 ; return 的函数返回值不作为遍历结果输出
  function* g1(){ yield 1; var s = yield* g2(); yield 3;console.log(s)}
  function* g2(){ yield 2; return 'this is my result!' }
  it = g1() it.next() // s的值是g2的return返回值

  ps:Generator函数的返回值在单纯的next()函数中单步输出,会作为一个状态值输出;
     在for..of..中循环遍历,会被忽略;在var res = yield* fun()中调用,会当做函数返回值赋值给变量res

  调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束

4.Generator函数主要关注的就是yield的返回值;yield*可以处理拥有iterator接口的数据;遍历器拥有iterator接口
  每一次调用next(),就会执行到一个yield处暂停,并输出yield后的数据

  yield 必须在Generator函数的当前上下文中,不能在子函数中yield

5.在递归函数中使用yield* 
  例子: var obj = {x:1,y:{y1:{y11:11,y12:12},y2:3},z:4}
  function* getKeys(obj){
    let keys = Reflect.ownKeys(obj)
    for(key of keys){
        if(typeof obj[key] === 'object'){
            yield* getKeys(obj[key])
        }else{
            yield {key:key,value:obj[key]}
        }
     }
   }
   var  it = getKeys()  for (let x of it) conosle.log(x);

  注:当调用next()程序运行到 yield* getKeys(obj[key]),yield遍历getKeys(obj[key])生成的
    遍历器对象。

6.Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。
  通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
  也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为

**7.实例说明Generator和yield的运行过程
  function* gen(){
      console.log(1)
      console.log(`1.${yield}`)
      console.log(`2.${yield}`)
      return 'result';
  }

  var it = gen(); //生成一个遍历器对象,其实就是一个指向数据的指针
  it.next(); //  输出1    第一次调用next(),启动遍历器,运行到第一个yield处,由于此处yield后没有数据,输出{value:undefined,done；fasle}(第一个next不能带参数,忽略)
  it.next('a'); //  输出1.a  第二次调用next()函数会从第一次暂停的地方开始运行,且参数'a'会作为yield表达式的返回值(不是输出值),即输出 1.a;程序继续运行到下一个
                             yield处,改yield后没有数据,输出{value:undefined,done；fasle}
  it.next('b'); //  输出2.b  第三次调用next()函数会从第二次暂停的地方开始运行,且参数'b'作为yield表达式的返回值,即输出 2.b;程序继续往下运行{value:'result',done:true}

8.一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象
  for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数

9.Generator.prototype.throw()
  Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获

10.Generator.prototype.return()
   Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数
   Generator 函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行

11.Generator函数中调用拧一个Generator函数,默认情况下是没有效果的 
   用yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数(也可以是带有iterator接口的数据,比如数组,字符创等)

12.函数的generator方法简写
    var obj={
        * gen(){}
    }

13.Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，
   也继承了 Generator 函数的prototype对象上的方法;不能和new一同使用

14. Generator函数拥有参数,可以对参数进行相应的操作后,再next出yield处理后的值
    记住Generator函数主要是用来使用yield可以暂停的特性,对其内的数据操作没有任何约束;
    只要有yield表达式的使用就可以了。
*/