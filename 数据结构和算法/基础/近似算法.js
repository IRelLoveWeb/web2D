/*
 * @Author: lyf
 * @Date: 2020-10-14 09:49:55
 * @LastEditors: lyf
 * @LastEditTime: 2020-10-16 10:01:58
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/近视算法.js
 */
const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut","ca", "az"])

const stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

// 贪婪算法
// 1. 每一次都获取最优解
// 2. 适用于NP完全问题, 求近似解
function found (statesNeeded, stations) {
  const used = []
  const selected = []
  while (statesNeeded.size) {
    // 每次循环 都获取交集最多的值
    let maxkey = ''
    let maxNum = 0
    for (let key in stations) {
      if (!used.includes(key)) {
        const selNum = (stations[key] & statesNeeded).size
        if (selNum > maxNum) {
          maxNum = selNum
          maxkey = key
        }
      }
    }
    used.push(maxkey)
    selected.push(maxkey)
    // 减去有交集的值
    statesNeeded -= stations(maxkey)
  }
}