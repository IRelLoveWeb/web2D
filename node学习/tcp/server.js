/*
 * @Author: liuyingfeng 
 * @Date: 2019-04-25 19:10:59 
 * @Last Modified by: lyf
 * @Last Modified time: 2019-04-25 19:21:33
 * @Summary 服务端tcp实例
 * #1、创建后台服务
 * #2、像客户端发送消息
 */

const net = require('net')

const server = net.createServer(socket => {
  socket.on('data', data => socket.write('Hello World!'))

  socket.on('end', () => console.log('连接中断'))

  socket.write('Welcome To Node World: ')
})

server.listen(8091, () => console.log('server bound'))