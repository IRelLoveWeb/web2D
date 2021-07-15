# 开发注意
* 每次修改全局注入的scss样式文件, 必须重启服务
* useEffect, useLayoutEffect 无法准确获取元素样式, 使用nextTick 或 setTimeout 100ms
* 页面局部滚动
  * 禁止全局滚动 => 配置文件中设置<disableScroll: true>
  * 如果需要动态计算scroll-view高度, 建议在外层套个view标签(空处理)
* 定制化导航栏
  * 配置文件中设置<navigationStyle: 'custom'>
  * 需要根据胶囊位置来定位标题和整体布局
