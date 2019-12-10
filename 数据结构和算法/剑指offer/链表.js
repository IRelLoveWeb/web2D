function Node(value, next) {
    this.value = value
    this.next = next
}

const n1 = new Node(5)
const n2 = new Node(4, n1)
const n3 = new Node(3, n2)
const n4 = new Node(8, n3)
const n5 = new Node(9, n4)
const n6 = new Node(22, n5)

const a1 = new Node(11)

// 链表的结尾添加一个节点
function addNode(nodes, node) {
    let pNode = nodes.next
    if(!pNode) {
        nodes.next = node
        return
    }

    while(pNode.next) {
        pNode = pNode.next
    }

    pNode.next = node

    return nodes
}

// console.log(addNode(n3, a1))

// 删除数值为n的节点
function removeNode(nodes, num) {
    if (nodes.value === num) {
        return nodes.next
    }

    let pNode = nodes

    while(pNode.next) {
        const node = pNode.next
        if (node.value === num) {
            const tmpNode = node.next
            node.next = null
            pNode.next = tmpNode
            return nodes
        }
        pNode = pNode.next
    }
    return nodes
}