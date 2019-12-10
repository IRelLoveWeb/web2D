// 1. 斐波拉切函数
function fiber(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let one = 0
    let two = 1
    let res = 0

    for (let i = 2; i <= n; i++) {
        res = one + two
        one = two
        two = res
    }

    return res
}