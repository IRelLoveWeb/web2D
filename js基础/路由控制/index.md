# 路由信息

## history

* history.length 该标签中所有的浏览记录长度

* 新增 或 替换 记录, 但是不会立即更新 页面; 只有触发了popState事件 才会加载页面
  * history.pushState({}, '', url) 新增一条记录
  * history.replaceState({}, '', url) 替换当前记录
