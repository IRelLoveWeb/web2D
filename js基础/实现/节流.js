// 间隔多少秒执行一次

function throttle(func, wait, options) {

    let previous
    let timer

    return function(...params) {
        let now = Date.now()

        if (!previous) previous = now

        let remaining = wait - (now - previous)

        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null;
            }
            func.apply(this,params)
        } else if (!timer){
            setTimeout(() => {
                timer = null
                previous = Date.now()
                func.apply(this,params)
            }, remaining)
        }
    }
}