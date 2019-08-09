#!/bin/bash

# 数学运算 表达式和运算符之间需要有空格
val=`expr 2 + 2`
val=$[2+2]
val=$((2+2))
echo "数学运算加法'expr 2 + 2'或\$[2+2]: ${val}"

val=`expr 3 \* 3`
val2=`expr 3 / 3`
echo "数学运算乘/除法'expr 3 (\* | /) 3': ${val},${val2}"

# shell基本运算符 
# https://www.runoob.com/linux/linux-shell-basic-operators.html

# shell中的()、(())、$()、$(())、${}
# () 开启一个新的子shell, 其内的变量无法在外部获取
  arr=(a=1 b=2 c=3)
  echo $a # 输出值为空
# $() 相当于 ``, 返回括号中命令的执行结果
  echo $(cd $( dirname ${BASH_SOURCE[0]} ) && pwd)
# (()) 计算并测试算术表达式结果
  ((2 < 1)) # 结果为false
  echo $? # 上次执行退出的不正常1(正常为0)
# $(()) 表达式结果
  c=$((2 < 1)) # 结果为false
  echo $c # 输出0
# ${} 参数替换与扩展
  a=1
  echo ${a}b
  echo $ab
# https://blog.csdn.net/zs064811/article/details/73969669-
