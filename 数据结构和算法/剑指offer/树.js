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

// 1. 遍历数组
function ergodic(node) {
    // 先序遍历
    // console.log(node.value)
    if (node.left) ergodic(node.left)
    // 中序遍历
    // console.log(node.value)
    if (node.right) ergodic(node.right)
    // 后序遍历
    // console.log (node.value)
}

// ergodic(root)

// 2. 根据 前序 和 中序遍历 构建二叉树
// 根据前序 可以得到父节点, 然后根据父节点的值 在中序遍历中 确定左右 子树; 循环可得
function construct(preOrder, midOrder) {
    if (preOrder.length === 1 && midOrder.length === 1 && preOrder[0] === midOrder[0]) {
        return new TreeNode(preOrder[0])
    }
    const nodeVal = preOrder[0]
    const node = new TreeNode(nodeVal)
    // 父节点在中序遍历的位置
    const nodeIndex = midOrder.findIndex(item => item === nodeVal)
    // 左分支
    const lmidOrder = midOrder.slice(0, nodeIndex)
    // 右分支
    const rmidOrder = midOrder.slice(nodeIndex + 1)
    if (lmidOrder.length) {
        node.left = construct(preOrder.slice(1, 1 + nodeIndex), lmidOrder)
    }

    if (rmidOrder.length) {
        node.right = construct(preOrder.slice(1 + nodeIndex), rmidOrder)
    }

    return node
}

// console.log(construct([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]))


