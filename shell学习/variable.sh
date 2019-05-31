#!/bin/bash

# 变量赋值,使用变量用 $变量名
# 变量和=之间 不能有空格
varyone=123
echo $varyone

# 只读变量
v2=1
readonly v2 # 将变量v2设置为只读的

# 删除变量
unset v2

# 重新赋值变量
varone=01234567891011
echo $varone

# 循环
for file in `ls ~`; do
	echo "this file name is ${file}"
done


echo "双引号字符串中可以使用变量, $varone"

echo '单引号字符串中不能使用变量,$varone'

echo "获取字符串长度,${#varone}"

echo "截取部分(序号3-5)字符,${varone:3:5}"

str="abcdefg"
echo `expr index "$str" fc`

# 定义数组
varyarr=(1 i2 dd3 fff4 ggggA ffffB C D)

echo "输出数组下标为3的值,\${varyarr[3]}:${varyarr[3]}"
echo "获取数组的长度,\${#varyarr[*/@]}:${#varyarr[*]}"
echo "获取数组下标为2的字符长度,\${#varyarr[2]}:${#varyarr[2]}"

# 循环输出数组
for str in ${varyarr[@]};
do
  echo $str
done