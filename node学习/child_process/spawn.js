/*
 * @Author: lyf
 * @Date: 2020-12-17 11:19:41
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-17 13:43:34
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/spawn.js
 */
const { spawn } = require('child_process')

// spawn('ls', ['-al'])

// spawn('node', ['./test.js'])

// 1. 子进程的标准输出
// const ls = spawn('ls', ['-al']);

// 2. 错误输出
const ls = spawn('no-ls')

// // 输出相关的数据
// ls.stdout.on('data', function(data){
//   console.log('data from child: ' + data);
// });
// // 错误的输出
// ls.stderr.on('data', function(data){
//   console.log('error from child: ' + data);
// });
// // 子进程结束时输出
// ls.on('close', function(code){
//   console.log('child exists with code: ' + code);
// });
// // 错误输出
// ls.on('error', (err) => {
//   console.log('Failed to start child process 1: ', err);
// });

// 3. 继承 父进程的 stdio
// spawn('ls', ['-al'], {
//   stdio: 'inherit'
// })