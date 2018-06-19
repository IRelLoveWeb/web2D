import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import {Provider} from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </React.Fragment>
  </Provider>
)

export default App

/* 
  每次使用dispatch激发action时,会调用所有注册的事件
  所有的connect【selector.run(props)】都会重新计算传给呆瓜组件的props,props值改变那么呆瓜组件就会重新渲染
*/