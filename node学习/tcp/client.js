/*
 * @Author: liuyingfeng 
 * @Date: 2019-04-25 19:11:26 
 * @Last Modified by: lyf
 * @Last Modified time: 2019-04-25 19:30:46
 * @Summary 客户端tcp实例
 * #1、请求服务端地址
 * #2、接受服务端返回数据
 */
const net = require('net')

const client = net.connect({ port: 8091 }, () => {
  console.log('client connect!')
  client.write('hi!')
})

client.on('data', data => {
  console.log(data.toString() + '----')
  // 保持链接, 在所有请求结束后才断开链接
  client.end()
})

client.on('end', () => {
  console.log('client disconnect!')
})

client.on('close', () => {
  console.log('client close!')
})