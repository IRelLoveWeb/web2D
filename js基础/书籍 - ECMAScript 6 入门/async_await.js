
async function test(){
    var s1 = await new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(123)
        },200)
    })
    console.log(s1)

    var s2 = await 34;

    console.log(s2)

    var d1 = Date.now();
    var  s3 = await Promise.all([
        _createPromse(201),
        _createPromse(402),
        _createPromse(6003)
    ]);
    var d2 = Date.now();

    console.log(d2-d1);
    console.log([...s3]);

    var  s4 = await Promise.race([
        _createPromse(201),
        _createPromse(402),
        _createPromse(6003)
    ]);

    console.log(s4);

    function _createPromse(ms){
        return new Promise(resolve =>{
            setTimeout(()=>resolve(ms%200),ms)
        })
    }
}

test();

//await 后面可以跟如何数据,但是最终都会变成Promise
//await 之间是顺序执行,前一个完成才能执行后一个

//Promise.all([p1,p2,p3]) 并行运行p

//async函数的返回值是一个promise对象。这个被返回的proimse对象的状态（即，是resolved，还是rejected）取决于async函数是如何结束的：

//async函数正常地通过return语句返回值 修改promise状态为： promise.resolve( 《return出来的值》 );
//async函数内部有异常被抛出 修改promise状态为： promise.reject(《throw出来的Error对象》)
//async函数没有返回值 修改promise状态为： promise.resolve()