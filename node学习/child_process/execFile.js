/*
 * @Author: lyf
 * @Date: 2020-12-16 18:19:55
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-16 18:49:48
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/execFile.js
 */
const { execFile } = require('child_process')

const handler = (err, stdout, stderr) => {
  if (err) {
    console.error('error:', err);
    return
  }
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
}

// 可以执行文件(名称)tsc 命令行参数['-h']
// execFile('tsc', ['-h'], handler)
// execFile('tsc', ['./test.ts'])

// execFile('./test.sh', handler)
execFile('go', ['-h'], handler)
