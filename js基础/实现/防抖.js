// 多次操作, 最后执行一次

function debounce(func, wait = 50, immediate = true) {
    let time

    return function(...params) {
        if(time) {
            clearTimeout(time)

            if (immediate) {
                func.apply(this, params)
            } else {
                time = setTimeout(() => {
                    func.apply(this, params)
                    time = null
                }, wait)
            }
        } else {
            if (immediate) {
                func.apply(this, params)
            } else {
                time = setTimeout(() => {
                    func.apply(this, params)
                    time = null
                }, wait)
            }
        }
    }
}