/*
 * @Author: lyf
 * @Date: 2020-12-17 13:44:54
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-17 14:48:10
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/event.js
 */
const { fork } = require('child_process')

// 子进程的句柄
const child = fork('./tests.js')

// 子进程 stdio流关闭时触发;
child.on('close', (code, signal) => {
  console.log('close 事件：', code, signal)
})

// 父进程中 主动调用child.disconnect()时触发
child.on('disconnect', () => {
  console.log('disconnect 事件...');
})

// 子进程 发生错误时触发
child.on('error', (code, signal) => {
  console.log('error 事件：', code, signal);
})

// 子进程 退出时触发; 有可能多个进程共享stdio, 该进程退出, 但是stdio未关闭。
child.on('exit', (code, signal) => {
  console.log('exit 事件：', code, signal);
})

// 在子进程中 使用 process.send() 函数来传递消息时触发
child.on('message', (val) => {
  console.log('message 事件：', val);

  // 主动断开 进程间通信
  // child.disconnect()
  // 主动关闭 子进程
  // child.kill('SIGHUP')
})

// 给子进程发送消息
child.send('this is parent process!!!')

