/*
 * @Author: lyf
 * @Date: 2020-12-16 20:39:56
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-17 15:21:02
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/tests.js
 */

console.log('this is a test file!!!')

console.log('version:', process.version)

console.log('execPath:', process.execPath)

// 给父进程发送信息
process.send('this is child process: ' + process.pid)

// 接受 父进程传递信息
process.on('message', (value) => {
  console.log('子进程接受消息: ', value)
})

// 主动 终端和父进程的通信
// process.disconnect()