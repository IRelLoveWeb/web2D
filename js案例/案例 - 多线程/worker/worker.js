
//importScripts('./rtree.js');
onmessage = function(e){

    /* 
        一次处理王城后,才会接受下一次的数据
    */
    var result = e.data;

    postMessage(result)
}