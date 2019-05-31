# 启动阶段
1. http.createServer[http模块] 
  1. 调用 Server函数[_http_server模块], 返回一个实例对象
    1. 设置kIncomingMessage属性  IncomingMessage[_http_incoming模块]
    2. 设置kServerResponse属性 ServerResponse 继承 OutgoingMessage[_http_outgoing模块]
    3. 继承net.Server函数[net模块]
      * 继承EventEmitter函数[events模块]
      * 多层继承, 最终继承到EventEmitter类, 可以使用事件方式实现
    4. 绑定监听事件`request`, requestListener[自己写的回调函数]
    5. 绑定监听事件`connection`, connectionListener[_http_server模块中, http定义的回调函数]

2. listen(port)
  1. Server.prototype.listen[net模块]
  2. 调用listenInCluster
  3. 调用setupListenHandle(Server.prototype._listen2)
    1. createServerHandle
      * 根据地址端口 生成不同类型的handle
      * 调用TCP[tcp_wrap模块(c++)], 返回tcp实例对象
      * 绑定ipv6/ipv4协议
    2. 绑定server对象的唯一标识符 async_id_symbol
    3. 绑定属性_handle tcp实例对象
    4. 绑定属性_handle.onconnection onconnection 
      * tcp链接成功会触发回调函数
      * 保持链接期间, 再次发送http请求, 不会触发该函数
    5. 绑定属性_handle[owner_symbol] = this **tcp链接成功后的回调函数中使用Server实例对象**
    6. defaultTriggerAsyncIdScope[internal/async_hooks模块]
      * 实际处理就是 Reflect.apply(process.nextTick, null, [emitListeningNT, this])

3. 客户端首次发出http请求
  1. c++实现tcp模块, tcp链接成功, 调用 2-3-3中绑定的onconnection回调函数
    * 三次握手在c++模块中实现, 握手成功后才会调用onconnection函数
  2. onconnection[net模块]
    1. 根据error是否为空, 执行error事件
    2. 判断是否超过最大链接数, 关闭链接
    3. 调用Socket函数[net模块], 生成scoket实例
    4. 触发connection事件, 执行回调函数[1.1.5]且传入socket实例对象
      * http模块, 通过call方式调用net.Server, 不传入回调函数, 在_http_server模块中的Server绑定connection事件
      * net.Server方式调用, 传入connectionListener则绑定connection事件
      * 事件触发, 调用对应的回调函数
      1. connectionListenerInternal, 传入sevrer实例和socket实例
        1. socket绑定 drain事件  ondrain[internal/http]
        2. socket.server属性
        3. socket 检测是否超时, socket绑定 timeout事件
        4. 获取parser(HTTPParser实例 [c++模块http_parser/http_parser_llhttp])
          1. parsers(FreeList的实例对象) [_http_common]
          2. 执行parsers.alloc函数 
            * 返回HTTPParser实例(c++模块对象)
            * 首次http请求,执行parsersCb函数
              * parser 绑定属性 kOnHeaders/kOnHeadersComplete/kOnBody/kOnMessageComplete
          3. 执行parser.reinitialize函数
          4. 绑定socket对象
        5. state: 一次tcp链接中保存数据和状态的对象
          * outgoing
          * incoming
        6. socket绑定一些列数据处理相关事件 data/error/end/close/drain
        7. parser.onIncoming 属性绑定函数parserOnIncoming[_http_server]
          * parserOnIncoming.bind(undefined, server, socket, state)
        8. 确保soket没有被消耗, 才会去消费？？
  3. tcp多久时间断开连接

4. tcp保持链接状态, 再次发送http请求 [3-2-4-1-4]
  1. 执行parser(HTTPParser实例)的kOnHeadersComplete属性函数
    1. 获取incoming对象(就是req的原始对象) 
      * 执行1-1-1 server.kIncomingMessage属性函数, 传入socket参数
    2. incoming赋值属性 httpVersion/url/upgrade
    3. incoming._addHeaderLines [_http_incoming模块]
      * 将头信息转成对象赋值给incoming.headers
    4. parser.onIncoming [3-2-4-1-7]
      * 被调用方式 parser.onIncoming(incoming, shouldKeepAlive)
      1. state.incoming.push(req)
      2. 生成res对象
        * 执行1-1-2 server.kServerResponse函数, 传入req参数
      3. 赋值res._onPendingData updateOutgoingData
      4. DTRACE_HTTP_SERVER_REQUEST？？？
      5. res绑定finish事件 resOnFinish函数[_http_server]
      6. 执行1-1-4 request事件
      7. 对返回数据进行处理？？最后执行res的finish事件
  2. 执行 4-1-4-5 绑定函数resOnFinish
    1. state.incoming.shift()
    2. process.nextTick(emitCloseNT, res) ？？ 与 2-3-5的差异

# 事件循环和请求回调之间的关联
  1. 调用 2-3-6, 执行 process.nextTick[next_tick], 传入emitListeningNT函数和server实例
    * queue实例 FixedQueue[internal/fixed_queue] 链表
    * 生成TickObject实例(emitListeningNT, [server], triggerAsyncId), push进queue链表中


# next_tick模块
  * nextTick
  * runNextTicks
    * processTicksAndRejections