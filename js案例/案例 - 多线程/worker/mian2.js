
document.getElementById('input2').onblur = function(e){
    worker.postMessage(e.target.value);
}
