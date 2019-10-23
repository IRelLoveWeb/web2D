// 在以排序的数组中, 查找数字对应的序号
// 时间复杂度 logN

const arr = [1, 3, 5, 8, 13, 25, 37]

const num = 13;

function binarySearch(arr, num) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high)/2)
    const tmp = arr[mid]

    if (tmp === num) {
      return mid
    } else if (tmp < num) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return null
}

const index = binarySearch(arr, num)

console.log(index)
