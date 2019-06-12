# AWK 指令 
* `awk [options] 'pattern{action}' file`
* 根据pattern获取符合条件的行, 对行进行options处理, 然后对行进行action处理
  * 默认根据条件分割, 在获取符合条件的行, 执行action操作
  * pattern和{action} 必须被单引号包裹, 防止shell解析
  * 没有pattern, 则对文件中每一行进行action处理
  * 没有action, 输出文件中的每一行
  * action必须全部在{}中
* 例子1: `awk -F ':' 'NR>=2 && NR<=6{print NR,$2}'`
  * 默认对每一行进行`:`分割, 获取2到6行, 输出符合条件行 行号,第二列
* 例子2: `awk -F ':' '$1~/^version/{print $1}' package.json`
  * 在文件package.json中匹配 第一列以version开头的行(每一行中以`:`分割, 分成多列)
* 范围查询
  * `awk [options] 'start,end{action}' file`
  * 必须匹配start才会匹配到数据; start匹配end未匹配,则会从start处到文件结束处所有行执行action
    * `awk -F ':' '/^xx/, NR<=n{print NR,$2}' file`
    * `awk -F ':' '/xx/, /xx/{print NR,$2}' file`
