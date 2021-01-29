/*
 * @Author: lyf
 * @Date: 2020-10-12 09:20:19
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-14 13:30:44
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/图.js
 */
// 图: 由 节点 和 边 组成

// 广度优先搜索
// 1. 查找节点a是否有到节点b的路径
// 2. 节点a到节点b的最短路径

const grap = {}

grap[a] = ['b', 'c', 'd']
grap[b] = ['c', 'f']
grap[c] = ['m', 'n']
grap[d] = ['k']
grap[f] = []
grap[m] = []
grap[n] = []

function search (grap, start, end) {
  let quene = [start]
  const searched = [] // 已检查过的
  while(quene.length) {
    const item = quene.unshift()
    if (!searched.includes(item)) { // 只有为检查过的元素才执行
      if (item === end) {
        return true
      } else {
        quene = [...quene, ...grap[item]] // 将领近的边依次加入队列
        searched.push(item)
      }
    }
  }
  return false
}

// 狄克斯特拉算法
// 1. 加权(无负权重)图
// 2. 有像无环图
// 3. 对于处理过的节点，没有前往该节点的更短路径; 负权边, 会导致之前的最短路径不正确
const grap2 = {
  start: { a: 2, b: 6 },
  a: { fin: 1 },
  b: { a: 3, fin: 5},
  fin: {}
}

const costs = {
  a: { cost: 2, parent: 'start' },
  b: { cost: 6, parent: 'start' },
  fin: { cost: Number.MAX_SAFE_INTEGER / 10 }
}

function foundPath (grap, costs) {
  // 对每个节点只计算一次
  const used = []

  // 寻找花费最小的节点
  function findLowCostNode () {
    let lowCostNode = null
    let lowCost = Number.MAX_SAFE_INTEGER / 10
    for (n in Object.keys(costs)) {
      if (!used.includes(n) && costs[n].cost < lowCost) {
        lowCost = costs[n].cost
        lowCostNode = n
      }
    }
    return lowCostNode
  }

  let node = findLowCostNode()
  while (node) {
    const cost = costs[node].cost
    // 更新节点的每个邻居节点的花费和父节点
    const lj = grap[node]
    for (n in lj) {
      const new_cost = cost + lj[n]
      if (new_cost < lj[n]) {
        consts[n].cost = new_cost
        consts[n].parent = node
      }
    }
    used.push(node)
    node = findLowCostNode()
  }
}

// 贝尔曼福德算法
// 1. 权重有负值