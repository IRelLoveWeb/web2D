// 使用递归来计算数组和
function sum (arr, i) {
  if (arr.length - 1 === i) return arr[i]
  return arr[i] + sum(arr, i + 1)
}
// console.log(sum([1, 2, 3, 4], 0))

// 使用递归查找最大值
function findMax (arr, j, max) {
  if (arr.length === j) return arr[max]
  if (arr[max] < arr[j]) max = j
  return findMax(arr, j + 1, max)
}

// console.log(findMax([1, 5, 3, 4, 8], 0, 0))

// 递归使用二分查找法
function search (arr, num) {
  if (!arr.length) return -1 // 基准条件
  const mid = Math.floor((arr.length - 1) / 2)
  if (arr[mid] === num) { // 基准条件
    return 1
  } else if (arr[mid] < num) { // 递归条件
    return search(arr.slice(mid + 1), num)
  } else { // 递归条件
    return search(arr.slice(0, mid - 1), num)
  }
}

console.log(search([1, 2, 7, 8, 9, 12], 9))