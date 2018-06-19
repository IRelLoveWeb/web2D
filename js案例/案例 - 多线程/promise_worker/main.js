//根据cesium中 worker 方式简易实现

(function(){
    function Task(name){
        this._name = name;
        this._worker = null;
    }

    Task.prototype.addTask = function(parameters){
        this._worker = createWorker(this);


        //必须异步,将实际参数传递给实际的onmessage函数
        return new Promise((resolve,reject) =>{
            setTimeout(resolve,1000)
        }).then(data =>{
            this._worker.postMessage(parameters.info);

            return new Promise((resolve,reject) =>{
                //该处得到处理后的数据
                this._worker.onmessage = function(e){
                    const  div =document.createElement('div');
                    div.innerHTML = e.data;
                    document.body.appendChild(div);

                    resolve(e.data + 'go on !');
                }
            });

        })
    }

    
    const url='./common.js';
    function createWorker(self){
        //对于每一个需要实现的worker必须先生成一个commonWorker
        let worker = new Worker(url);

        //将自己需要实现的worker的文件名传递给com中【修改onmessage】
        worker.postMessage({path:self._name})

        return worker;
    }


    let taskA = new Task('a');
    taskA.addTask({
        info:'a'
    }).then(k => alert(k));


    let taskB = new Task('a');
    taskB.addTask({
        info:'b'
    }).then(k => alert(k));
})()

/* 
    1. 生成common - worker 【postMessage,将处理数据的worker文件名A传递给com】
    2. 在 common - onmessage 中修改 onmessage指向 实际的数据处理函数【根据文具名A得到数据处理函数】
    3. 必须异步, postMessage 【实际处理数据参数】
    4. 在 worker.onmessage 中处理数据

    onmessage函数盖伊改变
*/