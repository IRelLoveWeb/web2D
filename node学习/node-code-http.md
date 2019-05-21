# 启动阶段
1. http.createServer[http模块] 
  1. 调用 Server函数[_http_server模块], 返回一个实例对象
    1. 设置kIncomingMessage属性  IncomingMessage[_http_incoming模块]
    2. 设置kServerResponse属性 ServerResponse 继承 OutgoingMessage[_http_outgoing模块]
    3. 继承net.Server函数[net模块]
      * 继承EventEmitter函数[events模块]
      * 多层继承, 最终继承到EventEmitter类, 可以使用事件方式实现
    4. 绑定监听事件`request`, requestListener[自己写的回调函数]
    5. 绑定监听事件`connection`, connectionListener[_http_server模块中的默认回调]

2. listen(port)
  1. Server.prototype.listen[net模块]
  2. 调用listenInCluster
  3. 调用setupListenHandle(Server.prototype._listen2)
    1. createServerHandle 
      * 调用TCP[tcp_wrap模块(c++)], 返回tcp实例对象
    2. 绑定属性_handle tcp实例对象
    3. 绑定属性_handle.onconnection onconnection **tcp链接成功后的回调**
    4. 绑定属性_handle[owner_symbol] = this **tcp链接成功后的回调函数中使用Server实例对象**
    5. defaultTriggerAsyncIdScope[internal/async_hooks模块]
      * 实际处理就是 Reflect.apply(process.nextTick, null, [emitListeningNT, this])

# 客户端发出http请求
  1. c++实现tcp模块, tcp链接成功, 调用 2-3-3中绑定的onconnection回调函数
  2. onconnection[net模块]
    1. 调用Socket函数[net模块], 生成scoket实例
    2. 触发connection事件, 传入socket实例对象（调用connectionListener函数[_http_server模块中的默认回调])
      * http模块, 通过call方式调用net.Server, 不传入回调函数, 在_http_server模块中的Server绑定connection事件
      * net.Server方式调用, 传入connectionListener则绑定connection事件
      * 事件触发, 调用对应的回调函数