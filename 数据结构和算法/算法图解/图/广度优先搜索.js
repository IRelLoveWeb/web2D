// 广度优先搜索, 根据依赖关系, 查找某元素是否存在

const obj = {
  0: [1, 3, 5, 7, 9],
  1: [11, 13, 15, 17],
  3: [],
  5: [51, 53],
  7: [70, 78],
  9: [1, 3]
}

function breadthFirst(obj, num) {
  let queue = obj[0]
  const searched = []
  while (queue.length) {
    const fnum = queue.shift()
    // 剔除循环引用, 检查过一次的数字不用再次检查
    if (!searched.includes(fnum)) {
      if (fnum === num) {
        return true
      }
      if (obj[fnum]) {
        queue = [...queue, ...obj[fnum]]
      }
      searched.push(fnum)
    }
  }
  return false
}

console.log(breadthFirst(obj, 53))

// 二叉树, 从左到右依次输出
// 广度优先搜索可以解决
