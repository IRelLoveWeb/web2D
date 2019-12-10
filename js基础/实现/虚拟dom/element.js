function Element(tagName, props, children) {
    const {key, ...rest} = props;
    this.tagName = tagName;
    this.props = rest;
    this.children = children;
    this.key = key;
}

Element.prototype.render = function() {
    const { tagName, props, children = []} = this
    // 创建新元素
    const el = document.createElement(tagName)
    // 元素添加新属性
    Object.keys(props).forEach(key => el.setAttribute(key, props[key]))
    // 元素添加 子元素
    children.forEach(ele => {
        let dom = null
        if (ele instanceof Element) {
            dom = ele.render()
        } else {
            dom = document.createTextNode(ele)
        }
        el.appendChild(dom)
    })

    return el
}