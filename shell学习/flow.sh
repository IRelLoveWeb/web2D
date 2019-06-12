#!/bin/bash

# 控制语句if
# if condition; then command; fi
# if condition; then command; else command; fi
# if condition; then command; elif condition; then command; else command; fi

# 控制语句 for
# for var in ${arr[*]}; do command; done
# for ((i=1;i<=5;i++)); do
#   command
# done;

# 控制语句 while
# while condition
# do
#   command
# done

# 控制语句 util
# util condition
# do
#   command
# done

# 控制语句 case
# case $var in
# var|var) 
#   command
#   ;;
# var)
#   command
#   ;;
# *)
#   command
#   ;;
# esac

# 函数定义
demoFunc() {
  echo "param 1: $1"
  echo "param 2: $2"
  echo "all params: $*"
  read othernum
  echo "hello world!! ${othernum}"
}
# 函数执行
demoFunc 'a' 2

# 输出重定向
# command > file
# command >> file 追加到文件file中
# command > /dev/null (/dev/null 文件, 写入其中的内容都会被舍弃)

# 输入重定向
# commnd < file

# 引入其他sh脚本
# . x.sh  或则 source x.sh