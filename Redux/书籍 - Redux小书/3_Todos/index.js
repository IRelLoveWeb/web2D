import React,{Component} from 'react'
import {render} from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Redux/reducers'

import AddTodo from './Containers/AddTodo'
import VisibleTodoList from './Containers/VisibleTodoList'
import Footer from './Components/Footer'

const store = createStore(Reducer);

class Index extends Component{
  render(){
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}

render(
  <Provider store= {store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)