/*
 * @Author: lyf
 * @Date: 2020-05-13 07:07:07
 * @LastEditors: lyf
 * @LastEditTime: 2020-05-15 07:24:54
 * @Description: In User Settings Edit
 * @FilePath: /iread/Users/a58/iworkspace/MoreCollections/数据结构和算法/基础/堆.js
 */
// 最大堆: 父节点 都比 子节点大; 最小堆: 子节点 都比 父节点大。
// 数组索引i, 则对应父亲子节点在数组中的位置 parent(i) = floor((i - 1)/2), left(i)  = 2i + 1, right(i) = 2i + 2
// n个节点, 则 高度h = log2(n), 最多叶子数为 2^h

// 堆排序（完全二叉树）最后一个非叶子节点的序号是n/2-1的原因
// 1. 假设最后一个非叶子节点只有 左子树, 此时 n 为偶数, 则 n - 1 = 2i + 1 => i = n/2 - 1
// 2. 假设最后一个非叶子节点有 左右子树, 此时 n 为奇数, 则 n - 1 = 2i + 2 => i = (n - 1)/2 - 1 => Math.floor(n/2) - 1
// 例如: n 为14, 则左后一个非叶子节点只有左子树, i = 6; n 为15, 则左后一个非叶子节点有左有子树, i = 6; 
