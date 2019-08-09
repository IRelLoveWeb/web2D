## comm命令 比较2个文件
* `comm [OPTION]... FILE1 FILE2`

* `comm file1 file2`
  * 输出三列, 第一列 是file1独有的内容, 第二列 是 file2独有的内容, 第三列 是 file1和file2共有的内容

*  `comm [-123] file1 file2` 不输出第几列
  * `comm -1 file1 file2` 不输出第一列内容, 及只输出 第二和三列内容
  * `comm -1 -3 file1 file2` 只输出第二列 内容, 即file2独有的内容
