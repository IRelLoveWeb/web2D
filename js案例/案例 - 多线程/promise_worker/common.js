function getJson(url){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(xhr.responseText);
            }
        }
    })
}

onmessage = function(e){
    //根据e.data.path获取实际的onmessage代码【即需要实现的worker】
    let url = './' + e.data.path + '.js';
    getJson(url).then(data =>{
        onmessage = new Function('var str='+data+';return str;')();
    })
}