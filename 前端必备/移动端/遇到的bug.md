# 移动端开发中遇到的问题

## 安卓手机中1px宽度边框展示不正确
```js
  // 一、border: 1px solid #DDDDDD;
  // 问题出现原因: 在移动端开发中, 通常需要将1px转成rem单位, 导致展示错误
  // 解决: 1px不进行rem换算
```

## ios中移除滑动条
```js
  // html代码
  <div className="wrap" ref={wrapRef}>
    <div className="content">
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
    </div>
  </div>

  // css代码
  // 注意: 
    // 1. 将.wrap 和 .list-item 设置相同高度
    // 2. 在.wrap中设置overflow
    // 3. 在.content中设置padding-bottom, 被强制隐藏
  .wrap { height: '200px', overflow: 'hidden' }
  .content {
    display: flex;
    overflow-x: auto;
    /* 将滑动bar订到底部被隐藏 */
    padding-bottom: 30px;
    /* 解决ios手机页面滑动卡顿问题 */
    -webkit-overflow-scrolling:touch;

    &::-webkit-scrollbar{
      display: none;
    }
  }
  .list-item {
    height: '200px';
    flex: 1;
  }

  // js代码 最外层中添加事件
  wrapRef.current.addEventListener('touchmove', (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
  }, {passive: false})

```

## 图片固定百分比
```js
  <div className="parent">
    <div className="child"></div>
  </div>
  .parent {
    position: relative;
    width: 200px;
    height: 500px;
  }

  .child {
    width: 50%; // 100px
    height: 50%; // 250px
    padding-top: 10%; // 20px fu
  }

```

## 沉浸式开发
  * ios 和 安卓手机中app默认的导航栏样式不一致。