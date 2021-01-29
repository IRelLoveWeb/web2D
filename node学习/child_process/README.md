# 参考文献
* https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

# Node 之 child_process模块

## 四种创建子进程的方式
* exec
  * 执行 命令, 有回调, 有执行时间(过期杀死进程), 无参数[此处参数和命令是一起的]
* execFile
  * 执行 可执行文件(或文件别名), 有回调, 有执行时间(过期杀死进程), 有参数
* fork
  * 执行 js模块, 无回调, 有参数
* spawn
  * 执行 命令, 无回调, 有参数

## 子进程常用事件
* events
* 子进程的stdio, 可以新建属于该进程自己的, 也可以继承使用父进程的; 这在生成进程时通过参数控制。

## 父子进程间通信
* ipc