## Promise是一种异步处理方案
* Promise接受一个拥有两个参数的函数(resolve和reject, 由JavaScript引擎提供，不用自己部署)
  * resolve函数,将Promise对象的状态从“未完成”变为“成功”(即从Pending变为Resolved)
  * reject函数，将Promise对象的状态从“未完成”变为“失败”(即从Pending变为Rejected)
  * 一般在异步任务执行后, 才执行 resolve函数或reject函数 改变状态
  * 状态确定后, Resolved立即执行then函数, Rejected立即执行catch函数

* 解析执行顺序
  ```
    let p1 = new Promise((resolve,reject) =>{
      console.log(1)
      resolve(3)
    })
    p1.then(res=>console.log(res))

    console.log(2)

    setTimeout(()=>console.log(4),2000)
    // 1 2 3 4
  ```
  * new Promise 生成promise对象, 立即执行传入函数, 输出 1
  * 执行console, 输出 2, 且 主线程执行完毕
  * 执行promise.then, 输出 3
  * 执行settimeout的回调函数, 输出 4


6.同步代码同步输出,异步代码异步输出
  //const f = () => console.log('now');
  (
    () => new Promise(
      resolve => resolve(setTimeout(()=>console.log('now'),10000))
    )
  )();
  console.log('next');

7.p= Promise.all([p1,p2,p3]);p.then(); 
  //p1,p2,p3全部resolved,p才resolved;
  //p1,p2,p3有一个rejected,p就rejected

  p= Promise.race([p1,p2,p3]);p.then().catch();
  //最先的状态改变就是p的状态 =》 指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve

  Promise.resolve(); Promise.reject();将同步代码变为异步的代码

8.自定义方法
  1>done() 处于回调链的尾端，保证抛出任何可能出现的错误
    Promise.prototype.done = function (onFulfilled, onRejected) {
      this.then(onFulfilled, onRejected)
        .catch(function (reason) {
         // 抛出一个全局错误
         setTimeout(() => { throw reason }, 0);
        });
    };

  2> finally() 不管Promise对象最后状态如何，都会执行的操作
    Promise.prototype.finally = function (callback) {
      let P = this.constructor;
      return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
      );
    };

9. p = new Promise(function(resolve,reject){
        resolve(result);
   });
    p.then(function(result){},function(err){});
    p.then(fnction(result){}).catch(function(err){})


10. var p1 = new Promise((resolve,reject) => {console.log(1); setTimeout(resolve,1000) })

var p2 = new Promise(resolve => { console.log(2);  resolve(p1);  console.log(3); })

console.log(4)

p1.then(result => console.log(5))

p2.then(res => console.log(6))

//1 2 3 4 5 6
p2的状态有p1决定,所以p1的状态再1s后改为resolved,p2立即执行了then函数;

p2 resolve(p1)  p1决定p2的状态

**11.采用链式的then
  1. 返回的常值  第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数
      var p1 = new Promise((resolve,reject) => {
        setTimeout(resolve(1),1000)
      })
      p1.then(res => res+1).then(res => console.log(res+'--------'))
      //2--------
  2. 返回的promise对象 前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用
      var p1 = new Promise((resolve,reject) => {
        setTimeout(resolve(1),1000)
      })
      p1.then(res => new Promise(resolve =>{
        setTimeout(()=>resolve(3),2000)
      })).then(res => console.log(res+'--------'))
      //3--------  等待2s后,才输出3
      这就是链式调用的基础

12. 链式调用中产生的错误都会被最后一个catch捕获；不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法
    var p1 = new Promise((resolve,reject) => {
        reject(new Error('test'));
      })
      p1.then(res => res+1).then(res => {}).catch(err => {})
      catch会捕获 reject 和 之前then函数中的错误

      注:没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应
         catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法

13.Promise.resolve(param);生成一个promise对象
    1.>param Promise实例   将不做任何修改、原封不动地返回这个实例
    2.>param 具有then方法的对象 这个对象转为Promise对象，然后就立即执行thenable对象的then方法
       let thenable = { then: function(resolve, reject) { resolve(42); } }; 
       let p1 = Promise.resolve(thenable);
       p1.then(function(value) {  console.log(value); }); // 42
       注释：thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出42
    3.>param 不是具有then方法的对象，或根本就不是对象
       function test(){ return 3; }
       Promise.resolve(test()).then((res)=>console.log(2 + res)); //5
       注释：生成一个新的Promise对象的实例,实例的状态从一生成就是Resolved,所以回调函数会立即执行。
            Promise.resolve方法的参数，会同时传给回调函数（test()函数的返回值3,当做参数传递给then中的res）
    4.>param 空
       setTimeout(function () { console.log('three'); }, 0);
       Promise.resolve().then(function () { console.log('two'); });
       console.log('one');
      //one two three
      注释：立即resolve的Promise对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时
            setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出