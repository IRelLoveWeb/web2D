/*
 * @Author: lyf
 * @Date: 2020-04-01 16:48:07
 * @LastEditors: lyf
 * @LastEditTime: 2020-05-13 07:21:11
 * @Description: In User Settings Edit
 * @FilePath: /iread/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/二叉树.js
 */
// 树的概念
// 1. 二叉查找树: 当前根节点的左边全部比根节点小，当前根节点的右边全部比根节点大
// 2. 高度: 指节点之间的边的最大值。一个高度为 h 的树有 h+1 层。

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

// 层次遍历
function ergodic2(node) {
    const quene = [node]
    while (quene.length) {
        const front = quene.shift()
        console.log(front.value)
        if (front.left) {
            quene.push(front.left)
        }

        if (front.right) {
            quene.push(front.right)
        }
    }
}

// 循环实现 先序 中-左-右
function front (node) {
    // 使用栈存储数据, 先进后出
    // 循环处理二叉树时, 缓存右节点, 先处理左节点
    const stack = [node]
    while (stack.length) {
        const point = stack.pop()
        console.log(point.value)
        if (point.right)  stack.push(point.right)
        if (point.left)  stack.push(point.left)
    }
}

// front(root)

// 循环实现 中序 左-中-右
function middle (node) {
    const stack = []
    let cNode = node
    // 现将左子树全部push进栈中, 作为遍历的开始
    while (cNode) {
        stack.push(cNode)
        cNode = cNode.left
    }

    // 对左子树进行处理
    while (stack.length) {
        const point = stack.pop()
        console.log(point.value)
        // 有右子树, 需要进行判断
        let _cNode = point.right
        while (_cNode) {
            stack.push(_cNode)
            _cNode = _cNode.left
        }
    }
}

// middle(root)

// 循环实现 中序 左-右-中
// https://www.cnblogs.com/yinheyi/p/10668108.html
function behind (node) {
    
}