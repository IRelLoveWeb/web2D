import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import reducers from './reducers/index'
import Counter from './components/Counter'
import {COUNT_ADD,COUNT_DEL} from './reducers/index'


const store = createStore(reducers);

class Index extends Component{
  render(){
    return (
      <Counter value={store.getState()}
               addCount = {()=>store.dispatch({type:COUNT_ADD})}
               delCount = {()=>store.dispatch({type:COUNT_DEL})}/>
    )
  }
}

const render = () => ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

//初始化
render()

//订阅事件
store.subscribe(render);