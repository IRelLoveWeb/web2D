#!/bin/bash

# 读取标准输入行
read name
echo "${name} is a test!"

# 开启转义(\n换行 | \c不换行)
echo -e "Hello \n"
echo "this is a test"

# 显示命令执行结果
echo `date`

# 单引号, 子能输出字符串; 双引号, 变量转义

# -p 输入提示 -n 输入长度 -t 输入时间 -s 不显示输入
# read -p "请输入一段文字:" -n 6 -t 5 -s pwd
# echo -e "\n password is ${pwd}"

# printf 使用替换符
# %d 整数 %f 浮点数 %s 字符串 %c 字节
printf "%4d %.6f %s %c\n" 2 3.14 "abc" "ab"