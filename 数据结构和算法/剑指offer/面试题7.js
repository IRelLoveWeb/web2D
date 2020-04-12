/*
 * @Author: lyf
 * @Date: 2020-04-02 13:42:04
 * @LastEditors: lyf
 * @LastEditTime: 2020-04-02 14:17:09
 * @Description: In User Settings Edit
 * @FilePath: /workspace/Users/a58/iworkspace/MoreCollections/数据结构和算法/剑指offer/面试题7.js
 */
function TreeNode(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
}

const preOrder = [1,2,4,7,3,5,6,8]
const midOrder = [4,7,2,1,5,3,8,6]

function reTree(preOrder, midOrder) {
}

console.log(reTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]))