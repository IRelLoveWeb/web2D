# commonjs 和 es6 模块化的区别

* commonjs 支持动态导入, es6 目前不支持
* commonjs 同步导入(服务端, 不影响), es6 前端, 影响渲染
* commonjs 值拷贝, 导出改变必须重启; es6 实时绑定, 导入和导出指向同一内存