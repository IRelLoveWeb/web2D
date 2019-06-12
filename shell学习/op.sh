#!/bin/bash

# 数学运算 表达式和运算符之间需要有空格
val=`expr 2 + 2`
val=$[2+2]
echo "数学运算加法'expr 2 + 2'或\$[2+2]: ${val}"

val=`expr 3 \* 3`
val2=`expr 3 / 3`
echo "数学运算乘/除法'expr 3 (\* | /) 3': ${val},${val2}"

# shell基本运算符 
# https://www.runoob.com/linux/linux-shell-basic-operators.html

