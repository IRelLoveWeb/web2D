/*
 * @Author: lyf
 * @Date: 2020-03-30 10:11:48
 * @LastEditors: lyf
 * @LastEditTime: 2020-03-30 10:37:57
 * @Description: In User Settings Edit
 * @FilePath: /workspace/Users/a58/iworkspace/MoreCollections/数据结构和算法/剑指offer/面试题4.js
 */
function find(matrix, num) {
    const rows = matrix.length
    const cols = matrix[0].length
    let row = 0
    let col = cols -1 
    while (row < rows && col >= 0) {
        const tmp = matrix[row][col]
        if (tmp > num) col--
        if (tmp < num) row++
        if (tmp === num) return true
    }
    return false
}

const res = find([
    [11,21,31,41,51],
    [22,32,42,52,62],
    [33,43,53,63,73],
    [44,54,64,74,84]
], 55)

console.log(res)