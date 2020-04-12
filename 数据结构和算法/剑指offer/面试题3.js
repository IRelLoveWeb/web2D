/*
 * @Author: lyf
 * @Date: 2020-03-27 11:04:43
 * @LastEditors: lyf
 * @LastEditTime: 2020-03-30 10:04:34
 * @Description: In User Settings Edit
 * @FilePath: /workspace/Users/a58/iworkspace/MoreCollections/数据结构和算法/剑指offer/面试题3.js
 */

//  题目一
function duplicate (nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        while (i !== nums[i]) {
            let num = nums[i]
            if (num === nums[num]){
                 return num
            } else {
                 [nums[i], nums[num]] = [nums[num], nums[i]]
            }
           
        }
    }

    return -1
}

// const res = duplicate([2, 3, 1, 4, 2, 5, 3])
// console.log(res)

// 题目二
function duplicate2(arr) {
    const len = arr.length
    const n = len - 1
    let start = 0
    let end = n

    function sizeof(min, max) {
        let total = 0
        for (let i = 0; i < len; i++) {
            const tmp = arr[i]
            if (tmp <= max && tmp >= min) {
                total++
            }
        }
        return total
    }

    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const size = sizeof(start, mid)

        if (start === end) {
            if (size > 1) {
                return start
            } else {
                break
            }
        }

        if (size > (mid - start + 1)) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
}

// const res = duplicate2([2, 3, 1, 4, 2, 5, 3])
// console.log(res)