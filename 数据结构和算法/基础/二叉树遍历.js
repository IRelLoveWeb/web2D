/*
 * @Author: lyf
 * @Date: 2020-04-01 16:48:07
 * @LastEditors: lyf
 * @LastEditTime: 2020-04-02 14:20:45
 * @Description: In User Settings Edit
 * @FilePath: /workspace/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/二叉树遍历.js
 */
function TreeNode(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
}

const t1 = new TreeNode(4)
const t2 = new TreeNode(8)
const t3 = new TreeNode(6, t1, t2)
const t4 = new TreeNode(12)
const t5 = new TreeNode(16)
const t6 = new TreeNode(14, t4, t5)
const root = new TreeNode(10, t3, t6)

// 递归遍历
function ergodic(node) {
    if (node) {
        // 先序遍历
        // console.log(node.value)
        if (node.left) ergodic(node.left)
        // 中序遍历
        // console.log(node.value)
        if (node.right) ergodic(node.right)
        // 后序遍历
        // console.log (node.value)
    }
}

// ergodic(root)