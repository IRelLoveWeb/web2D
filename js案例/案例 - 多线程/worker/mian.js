const worker = new Worker('./worker.js');

document.getElementById('input1').onblur = function(e){
    /* 
        多次调用postMessage,会一起发送
    */
    worker.postMessage(e.target.value);

    worker.postMessage(Number(e.target.value)*2);
}

worker.onmessage = function(e){
    var newDiv = document.createElement('div');
    newDiv.innerHTML = e.data;

    document.body.appendChild(newDiv);
}