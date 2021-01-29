/*
 * @Author: lyf
 * @Date: 2020-12-28 22:12:08
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-28 22:50:19
 * @Description: In User Settings Edit
 * @FilePath: /cook-electron/Users/a58/iworkspace/MoreCollections/node学习/worker_threads/worker.js
 */
const { Worker, isMainThread, workerData, parentPort } = require('worker_threads')

// 1. workerData 通过主线程 传递数据 到子线程

if (isMainThread) {
  console.log('this is main thred!')
  // 2. 可以创建多个子线程
  const work = new Worker(__filename, {
    workerData: { key: 'hello world!' }
  })
  const work2 = new Worker(__filename, {
    workerData: { key: 'hello world!' }
  })

  // 3. 父子进程间的信息传递
  work.postMessage('this is work thred!')
  work2.postMessage('this is work2 thred!')

  work.on('close', () => {
    console.log('work thred closed!')
  })
  work2.on('close', () => {
    console.log('work2 thred closed!')
  })
  // 收到线程返回信息
  work.once('message', (message) => {
    console.log('message', message)
  })

} else {
  console.log('workerData', workerData)

  // 在子线程中 接受主线程发送的信息
  parentPort.on('message', (message) => {
    console.log(`recevie: ${message}`)
    // 向主线程返回信息
    parentPort.postMessage(`replay: ${message}`)
  })
}
