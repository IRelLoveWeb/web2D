## js运行机制
  * 参考文章: http://lynnelv.github.io/js-event-loop-browser
  * 单线程: 在一个时间只能执行一个任务
  * js中的任务分为同步任务和异步任务, 同步任务在主线程中执行, 异步任务进入任务队列
  * 任务队列macrotask和microtask
    * macrotask **包含执行整体的js代码，事件回调，XHR回调，定时器（setTimeout/setInterval/setImmediate），IO操作，UI render**
    * microtask **更新应用程序状态的任务，包括promise回调，MutationObserver，process.nextTick，Object.observe**
    * 浏览器至少有一个事件循环，一个事件循环至少有一个任务队列（macrotask）
    * 执行流程
      1. 检查macrotask队列是否为空，非空则到2，为空则到3
      2. 执行macrotask中的一个任务
      3. 继续检查microtask队列是否为空，若有则到4，否则到5
      4. 取出microtask中的任务执行，执行完成返回到步骤3
      5. 执行视图更新
    * 举个例子
      * 主线程从上往下执行, Promise立即执行, 输出 begin p1 p2 end; 即事件循环中 macrotask任务执行一个
      * macrotask任务执行完一个, 循环执行 microtask任务, 即输出 promiseThen1 promiseThen2
      * 此处没有ui更新, 下一次 event loop
      * 按顺序执行setTimeout(macrotask任务), 输出 timeout1, 然后执行 promise(microtask任务), 输出 timeout1-promise
      * 此处没有ui更新, 下一次 event loop
      * 执行第二个setTimeout(macrotask任务), 输出 timeout2
    ```
      console.log('begin')

      setTimeout(()=> { 
        console.log('timeout1')
        
        Promise.resolve().then(() => {
           console.log('timeout1-promise')
        })

      }, 0)

      new Promise((resolve) => {
        console.log('p1)
        resolve()
        console.log('p2)
      }).then(() => {
        console.log('promiseThen1')
      }).then(() => {
        console.log('promiseThen2')
      })

      setTimeout(()=> { console.log('timeout2') }, 0)

      console.log('end')

      // begin p1 p2 end promiseThen1 promiseThen2 timeout1 timeout1-promise timeout2
    ```
  * 造成页面卡顿的原因
    > dom元素绑定事件,用户点击操作(UI操作时),事件回调函数此时被推入任务队列,但如果此时有一个大计算的js同步任务在执行,那么任务队列中事件回调函数必须等待js同步任务执行完成后,才会被调用,这就是造成卡顿的原因
  * 异步任务 不会立即进入任务队列
    * 绑定的ui事件, 需要触发ui事件后, 回调函数及其上下文才会进入任务队列
    * ajax事件, 请求成功后的回调函数才会进入任务队列
    * setTime函数, 会有专门对象托管, 等时间到了, 其回调函数才会进入任务队列
    * promise的then函数, 也是在状态resolevd后才会进入任务队列

  * setTime详解
    ```
      for(var i=0;i<4;i++){
        setTimeout(function(){
            console.log(i)
        },1000)
      }
    ```
    * 先执行同本任务for循环,异步任务setTimeout会先存放在timer对象中,在for循环的过程中不会立即放入任务队列,
    * 等到了1s之后(因为for循环执行时间很短,可以不计),四个setTimeout异步任务会一起进入任务队列,再依次执行;
    * 所以结果才是几乎同时出现4个4,而不是隔一秒出现一个4

    ```
      for(var i=0;i<4;i++){
        setTimeout(function(){
            console.log(i)
        },1000*i)
      }
    ```
    * 伪代码:描述异步任务进入任务队列中的时间
    ```
      quene = []
      timer = {}
      第一次循环
        timer.t1 = setTimeout(()=>{},1000)   等待1秒后 quene.push(timer.t1)
      第二次循环
        timer.t2 = setTimeout(()=>{},1000)   等待2秒后 quene.push(timer.t2)
      第三次循环
        timer.t3 = setTimeout(()=>{},1000)   等待3秒后 quene.push(timer.t3)
      第四次循环
        timer.t4 = setTimeout(()=>{},1000)   等待4秒后 quene.push(timer.t4)

      描述异步任务执行时间
        for循环同步任务结束,查询任务队列中异步任务,队列不为空则执行异步任务[由于for循环执行时间很短,忽略不计]
        1s后,t1进行了队列,执行,输出当前作用域中的i,4;队列中为空
        1s后,t2进入了队列(t1等待1s进入队列,执行时间忽略,再过1s,t2进入队列),执行,输出当前作用域中的i,4;队列中为空
        ...
    ```
 