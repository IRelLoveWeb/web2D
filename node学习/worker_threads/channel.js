/*
 * @Author: lyf
 * @Date: 2020-12-28 22:28:02
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-29 10:23:29
 * @Description: In User Settings Edit
 * @FilePath: /cook-electron/Users/a58/iworkspace/MoreCollections/node学习/worker_threads/channel.js
 */
const { Worker, isMainThread, MessageChannel, parentPort } = require('worker_threads')

const { port1, port2 } = new MessageChannel()

// // port1 向 port2 发信息
// port1.postMessage('hello!')

// port1.on('close', () => console.log('port1 closed!'));
// port2.on('close', () => console.log('port2 closed!'));

// // 接受port1发的信息
// port2.on('message', (message) => {
//   console.log(message)
//   port2.close()
// });

if (isMainThread) {
  // 消息通道
  const channel = new MessageChannel()
  // 工作线程
  const worker = new Worker(__filename)
  // 将消息通道的 端口传给 子线程
  worker.postMessage({ port: channel.port1 }, [channel.port1])
  channel.port2.on('message', (message) => {
    console.log(message)
    // 退出进程
    // process.exit()
  })
} else {
  parentPort.on('message', (value) => {
    // 通过消息通道 端口给 主线程发送消息
    value.port.postMessage('this is port1!!')
    value.port.close()
  })
}

process.on('exit', () => {
  console.log('this process exit!')
})