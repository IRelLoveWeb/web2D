const DATA = [2, 5, 7, 9, 11, 15, 21]

// 统计执行时间
function calTime(func, name, data = []) {
  console.time(name + '执行时间');
  console.log(func(...data))
  console.timeEnd(name + '执行时间');
}

// 二分查找
// 如果在有序列表中找到num值, 返回的left是num在列表中的位置
// 如果没有在序列表中找到num值, 那么num肯定是在 某两个数之间, left就是较大数在列表中的位置
function query(arr, num) {
  let left = 0
  let right = arr.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === num) {
      return `left: ${left}, num: ${num}`
    } else if (arr[mid] > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return `left: ${left}`
}

calTime(query, '冒泡排序优化', [DATA, 8])