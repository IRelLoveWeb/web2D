/*
 * @Author: lyf
 * @Date: 2020-12-16 20:34:32
 * @LastEditors: lyf
 * @LastEditTime: 2020-12-17 13:56:33
 * @Description: In User Settings Edit
 * @FilePath: /books/Users/a58/iworkspace/MoreCollections/node学习/child_process/fork.js
 */
const { fork  } = require('child_process')

// 1.控制台有输出, stdio(标准输出) 继承父进程, 即 子进程数据 会在 父进程stdio 输出
fork('./tests.js',{ silent: false })

// 2.控制台无输出, 子进程数据 会直接pipe到子进程stdio
// fork('./tests.js', { silent: true })

// 3.通过 stdout 属性，可以获取到子进程输出的内容
const child3 = fork('./tests.js', {
  silent: true
});

child3.stdout.setEncoding('utf8');
child3.stdout.on('data', function (data) {
  console.log('stdout 中输出：');
  console.log(data);
});

// 4. execPath node可执行文件路径(控制node版本)
// fork('./tests.js',{
//   silent: false,
//   execPath: '/Users/a58/.nvm/versions/node/v15.4.0/bin/node'
// })