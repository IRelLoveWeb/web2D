/*
 * @Author: lyf
 * @Date: 2020-12-16 17:55:50
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-16 18:32:07
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/exec.js
 */
const { exec } = require('child_process')

// - A
// - A1
// - A2
  // - A21
  // - A22
    // - A221
    // - A222
      // - exec.js

// 在A目录中执行 exec.js
// 1. 在A目录中启动node进程, 来执行 exec.js文件
// 2. 此时的进程执行地址(process.cwd())是A目录
// 3. 这个操作的效果, 相当于在A处新建子进程进行处理。
      
const handler = (err, stdout, stderr) => {
  if (err) {
    console.error('error:', err);
    return
  }
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
}

// 监听回调数据方法一
// exec('ls', handler)
// exec('ls', { cwd: '/usr' }, handler)

// 可以执行文件(名称)ls 命令行参数-alf 
exec('ls -alf', { cwd: '/usr' }, handler)

// 监听回调数据方法二
// 进程执行超时时间(ms), 超时会杀掉进程
// const child = exec('ls',{ timeout: 5 })

// child.stdout.on('data', (data) => {
//   console.log('stdout: ' + data);
// })

// child.stderr.on('data', (err) => {
//   console.log('error 输出:', err);
// })
