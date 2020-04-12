/*
 * @Author: lyf
 * @Date: 2020-03-30 10:42:53
 * @LastEditors: lyf
 * @LastEditTime: 2020-03-31 09:47:34
 * @Description: In User Settings Edit
 * @FilePath: /iread/Users/a58/iworkspace/MoreCollections/数据结构和算法/剑指offer/面试6.js
 */
function Node(value, next) {
    this.value = value
    this.next = next
}

// 栈实现
function prints(nodeList) {
    if (!nodeList) return -1
    let node = nodeList
    const stack = []
    while (node) {
        stack.push(node.value)
        node = node.next
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        console.log(stack[i])
    }
}

// 递归
function prints2(node) {
    if (node) {
        if (node.next) prints2(node.next)
        console.log(node.value)
    }
}

let nodes = nodeList = new Node(0)
for (let i = 0; i < 10; i++) {
    nodeList.next = new Node(i + 1)
    nodeList = nodeList.next
}

// prints(nodes)
prints2(nodes)

// 栈: 先进后出
// 队列: 先进先出