// 时间复杂度 O(n2)
// 循环n次, 每次选择最小值放在开始位

const arr = [3, 9, 5, 12, 21, 2, 8]

function selectSort(data) {
  for (let i = 0, len = data.length; i < len; i++) {
    let minIndex = i;
    // 寻找最小值的序号
    for (let j = i+1; j < len; j++) {
      minIndex = data[minIndex] > data[j] ? j : minIndex
    }
    // 将i的值和最小值互换
    [data[minIndex], data[i]] = [data[i], data[minIndex]]
  }
  return data
}

console.log(selectSort(arr));

