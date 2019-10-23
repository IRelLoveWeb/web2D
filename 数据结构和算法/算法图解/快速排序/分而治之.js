// 使用递归累加数组

const arr = [2, 4, 6, 1, 7, 9, 20]

function sum(arr) {
  if (!arr.length) return 0

  return arr[0] + sum(arr.slice(1))
}

console.log(sum(arr))


// 查找数组中最大数
let max = 0
for(let i = 1, len = arr.length; i < len; i++) {
  if (arr[max] < arr[i]) max = i
}
console.log(arr[max])

// 快速排序
// 分而治之的思想, 取基数, 大于和小于数分两侧, 在分别对两数组进行快速排序

function quickSort(arr) {
  if (arr.length < 2) return arr
  const left = []
  const right = []
  const base = arr[0]
  for(let i = 1, len = arr.length; i < len; i++) {
    if (base < arr[i]) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return [...quickSort(left), base, ...quickSort(right)]
}

console.log(quickSort(arr))
