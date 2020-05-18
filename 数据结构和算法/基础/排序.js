/*
 * @Author: lyf
 * @Date: 2020-05-06 08:51:09
 * @LastEditors: lyf
 * @LastEditTime: 2020-05-18 07:39:42
 * @Description: In User Settings Edit
 * @FilePath: /workspace/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/排序.js
 * 
 * // 参考 https://github.com/damonare/Sorts
 */
var DATA = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

// 统计执行时间
function calTime (func, data, name) {
  console.time(name + '执行时间');
  console.log(data[0] instanceof Array ? func(...data) : func(data))
  console.timeEnd(name + '执行时间');
}

// 冒泡排序
function bubbleSort (arr) {
  const len = arr.length
  // 每次循环, 假设修改最右边数为最大值
  for (let i = 0; i < len; i++) {
    // 相邻两数比较, 大的放后边
    // 只有左边数比右变数大, 才发生交换
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 冒泡排序优化
// 每次循环的时候, 只有左数比右数大, 才发生交换
// 那么记录, 每次循环中最后一次执行交换的位置, 这个位置之后的排序是正常排序
function bubbleSort1 (arr) {
  let i = arr.length - 1
  // 交换位置 必须大于0, 才进行循环。
  while (i > 0) {
    // 记录每次循环, 最后一次交换的位置, 作为下次循环的尾部
    // 默认为0, 该次循环没有交换位置
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i = pos
  }
  return arr
}
// calTime(bubbleSort, DATA, '冒泡排序')
// calTime(bubbleSort1, DATA, '冒泡排序优化')


// 选择排序
function selectionSort(arr) {
  let len = arr.length
  // 每次循环, 设置序号i为最小值
  for (let i = 0; i < len; i++) {
    let min = i
    // 每次循环, 取当前最小的值的序号赋给min
    for (let j = i; j < len; j++) {
      if (arr[min] > arr[j]) min = j
    } 
    // 交换最小值
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
// calTime(selectionSort, DATA, '选择排序')


// 插入排序
function insertionSort(arr) {
  // 假定第一个是有序的, 从第二个数开始往有序列表中插入数据
  for (let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i]
    let j = i - 1
    // 有序列表从后往前 和 key比较, key小于列表值, 就交换
    // while (key < arr[j] && j >= 0) {
    //   [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    //   j--
    // }

    // while 循环 可以用 for循环来实现
    // for (;j >= 0; j--) {
    //   if (key < arr[j]) {
    //     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    //   }
    // }

    // key小于列表值 值往后移位, 在 key 大于 列表值 位置, 插入key值。
    while (key < arr[j] && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

// calTime(insertionSort, DATA, '插入排序')

// 希尔排序
function shellSort (arr) {
  const len = arr.length
  // 将数组arr划分成多个逻辑数组, 逻辑数组的增量为gap, 
  // 每个gap增量中的所有逻辑数组进行插入排序, 改变增量gap, 直至gap = 1
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 对所有的逻辑数组进行插入排序。
    // 初识化i = gap, 则是假设逻辑数组的第一个数是有序的
    // 这里可以看成是对逻辑数组的并行处理, 不是串行的
    // 即按数组(arr)的顺序依次往下执行, 每个i都是某个逻辑数组的值
    for (let i = gap; i < len; i++) {
      // 对每个逻辑数组进行插入处理
      let key = arr[i]
      let j = i - gap
      while (j >= 0 && arr[j] > key) {
        arr[j + gap] = arr[j]
        j-=gap
      }
      arr[j + gap] = key
    }
  }
  return arr
}
// calTime(shellSort, DATA, '希尔排序')

// 归并排序: 分治法
// 递归:
// 1. 必定含有限定条件, 终止递归
// 2. 可以在每次递归中对上一次的返回结果, 做处理
function mergeSort (arr) {
  const len = arr.length
  if (len < 2) return arr
  const mid = Math.floor(len/2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

// 1. 单个元素肯定是有序的
// 2. 对有序数组进行归并操作
// 3. 在递归到达限定条件时, 返回的是单个数组元素
function merge (left, right) {
  const res = []
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  while (left.length) {
    res.push(left.shift())
  }

  while (right.length) {
    res.push(right.shift())
  }

  return res
}
// calTime(mergeSort, DATA, '归并排序')


// 快速排序
function quickSort (arr) {
  const len = arr.length
  if (len <= 1) return arr
  const left = []
  const right = []
  const num = arr[Math.floor(len / 2)]
  let i = len - 1
  while (i >= 0) {
    const tmp = arr[i]
    if (num > tmp) left.push(tmp)
    if (num < tmp) right.push(tmp)
    i--
  }

  return [...quickSort(left), num, ...quickSort(right)]
}
// calTime(quickSort, DATA, '快速排序')
 
// 堆排序
function heapSort (arr) {
  const len = arr.length
  // 构建堆(大顶堆)
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, len)
  }

  // 交换数组首尾, 减一重新维护堆的性质
  for (let j = len - 1; j > 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]]
    adjustHeap(arr, 0, j - 1)
  }

  return arr
}
// 维护堆的性质
function adjustHeap(arr, i, len) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i
  if (left < len && arr[left] > arr[max]) max = left
  if (right < len && arr[right] > arr[max]) max = right
  if (max !== i) {
    [arr[max], arr[i]] = [arr[i], arr[max]]
    // 发生交换, 还要维护交换处子树的堆性质
    adjustHeap(arr, max, len)
  }
}

// calTime(heapSort, DATA, '堆排序')

// 计数排序
function countingSort(arr) {
  let tmpArr = []
  let res = []
  let min = 0
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    let iNum = arr[i]
    // 获取数组中的最大 和 最小值
    if (iNum > max) max = iNum
    if (iNum < min) min = iNum
    // arr数组中的值是tmpArr数组中的序号
    tmpArr[iNum] = tmpArr[iNum] ? tmpArr[iNum] + 1 : 1
  }

  // tmpArr数组循环, 值代表该序号出现的次数
  for (let j = min; j <= max; j++) {
    const count = tmpArr[j]
    if (count === 1) {
      res.push(j)
    }

    if (count > 1) {
      for (let k = 0; k < count; k++) {
        res.push(j)
      }
    }
  }

  return res
}
const DATA1 = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]
// calTime(countingSort, DATA1, '计数排序')

// 桶排序
function bucketSort (array, num) {
  let min = 0, max = 0, step = 0, bucket = [], res = []
  const len = array.length
  // 提取数组中的最大和最小值
  for (let i = 0; i < len; i++) {
    if (array[i] > max) max = array[i]
    if (array[i] < min) min = array[i]
  }
  // 计算每个桶间的增量
  step = (max - min + 1) / num
  for (let j = 0; j < len; j++) {
    // 算出每个数归于的桶
    const index = Math.floor((array[j] - min) / step)
    if (bucket[index]) { // 插入排序, 排序每个桶的值
      let k = bucket[index].length - 1
      while (k >= 0 && bucket[index][k] > array[j]) {
        bucket[index][k + 1] = bucket[index][k]
        k--
      }
      bucket[index][k + 1] = array[j]
    } else { // 桶的初始化
      bucket[index] = []
      bucket[index].push(array[j])
    }
  }

  for (let m = 0, blen = bucket.length; m < blen; m++) {
    res = [...res, ...bucket[m]]
  }

  return res
}
// calTime(bucketSort, [DATA, 6], '桶排序')
// calTime(bucketSort, [DATA, 5], '桶排序')
// calTime(bucketSort, [DATA, 3], '桶排序')

// 基数排序
function radixSort(arr, maxDigit) {
  
}