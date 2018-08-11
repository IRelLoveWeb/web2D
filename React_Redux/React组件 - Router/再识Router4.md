1. 必须有一个Router在所有路由的最外围,所有的路由都是该组件的child

2. Link <Link to='/A'>A</Link>  属性to 决定了location这个对象的值;
    to的值是str,则location.pathname=str;
    to是一个对象,则location = Object.assign(location,to),to中的属性浅拷贝到location对象中,
    可以通过这个方法把需要传递给组件A的参数放置在location对象中

3. Route <Route path='/A' component={A} />
    Route组件的props不会传递给组件A
    则组件A的props有属性 history match location 
    history 操作页面前进后退
    location 当前url
    match 匹配规则


4. Link组件只是一个url, Route组件用来展示相应的UI
    Link 可以处于组件的任意位置【Router之下】

5. router4中所有都是组件,props的key值一般都是小写

6. Link to 会跳转到 Route path 匹配的组件,此组件有history location match 这三个属性;
    而非Route component指向的组件 需要使用这三个属性,就必须使用 withRouter高阶组件(函数)
    此时该组件的三属性就是最近Route匹配组件的三属性

    withRouter就是为组件获取三属性



7. Switch包裹的Route 只显示匹配到的第一个Route指向的组件,该child永远只会显示一个