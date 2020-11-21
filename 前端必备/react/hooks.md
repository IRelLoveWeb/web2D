# hooks

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

