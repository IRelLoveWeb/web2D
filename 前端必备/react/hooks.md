# hooks

## 优点
* 命名空间解耦、静态检查、组件参数清晰、单组件实例
* 解决this指像不清晰问题

## 遇到问题
```js
  // 问题一
  <Input onChange={handleChange}>

  function handleChange(evt) {
    // 报错: 在react中evt是实时性的, 而setData回调函数中的evt.target是之前环境的(非实时), 所以evt.target为null
    setData((data) => ({ ...data, key: evt.target.value }))
    // 正确
    const key =  evt.target.value
    setData((data) => ({ ...data, key }))
  }
```

* useEffect 副作用函数 作用域

* Context 无视父级组件的 更新策略
