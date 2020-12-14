# 前后端分离
* 一体式开发: 页面和接口同源, cookie和session验证登录
* 分离式开发: 页面和接口不同源(多个服务端), cookie和session验证登录不适合(同源限制, 接口无法共享cookie); 使用token方式, 与同源无关。