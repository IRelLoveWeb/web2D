// 1. 在一个长度为n的数组里所有数字都在0~n-1中, 找出数组中的重复数字
// tips: 一纬数组在内存中占据连续空间,可以根据下标定位元素
function duplcate(arr) {
    for (let i = 0, len = arr.length; i < len ;i ++) {
        while(arr[i] !== i) {
            const num = arr[i]
            if (num === arr[num]) {
                return num
            }

            [arr[i], arr[num]] = [arr[num], arr[i]]
        }
    }

    return -1
}
const numbers = [2, 3, 1, 4, 2, 5, 3]

// console.log(duplcate(numbers))

// 2. 在一个长度为n+1的数组里数字都在1～n,找出数组中的重复数字
function getDuplication(numbers, length) {
    let start = 1
    let end = length - 1

    function getCount(min, max) {
        let count = 0
        for (let i = 0; i < length; i++) {
            if (numbers[i] >= min && numbers[i] <= max) count++
        }
        return count
    }

    while(start <= end) {
        const mid = ((end - start) >> 1) + start
        const count = getCount(start, mid)
        
        if (start === end) {
            if (count > 1) {
                return start
            } else {
                break
            }
        }

        if (count > (mid - start + 1)) {
            end = mid
        } else {
            start = mid + 1
        }
    }

    return -1
}

console.log(getDuplication(numbers, 7))

// 3.在从左到右, 从上到下 一次变大的 二维数组中, 查找数字n是否存在
function find(arr, num) {
    const rows = arr.length
    const cols = arr[0].length
    let row = 0
    let col = cols
    while(row <= rows && col > 0) {
        const tmp = arr[row][col]
        if (tmp === num) {
            return true
        }
        if (tmp < num) {
            row = row + 1
        }

        if (tmp > num) {
            col = col - 1
        }
    }
    return false
}