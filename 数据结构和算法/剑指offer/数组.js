// 1. 在一个长度为n的数组里所有数字都在0~n-1中, 找出数组中的重复数字
// 在排序的过程中判断 是否有重复值
function duplcate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > arr.length) {
            return true
        }
    }
    for (let i = 0; i < arr.length; i++) {
        while(arr[i] !== i) {
            const num = arr[i]
            if (arr[i] === arr[num]) {
                return true
            }

            [arr[i], arr[num]] = [arr[num], arr[i]]
        }
    }

    return false
}
const numbers = [2, 3, 1, 4, 2, 5, 3]

// console.log(duplcate(numbers))

// 2. 在不修改数组的前提下, 找出重复数字
function getDuplication(numbers, length) {
    let start = 1
    let end = length - 1;
    while(end >= start) {
        const mid = Math.ceil((start + end)/2)
        const count = numbers.reduce((total, prev)=> {
            if (prev >= start && prev <= mid) {
                total+=1
            }
            return total
        }, 0)

        if (end === start) {
            if (count > 1) {
                return start
            }

            break
        } 

        if (count > (mid - start + 1)) {
            end = mid
        } else {
            start = mid + 1
        }
    }

    return -1;
}

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

// 4.