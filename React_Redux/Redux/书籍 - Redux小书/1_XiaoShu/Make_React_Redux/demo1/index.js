import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Content from './Content'


function createStore(reducer){
  let state;
  const listeners = [];
  const getState = () => state
  const subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({})
  return {getState,subscribe,dispatch}
}

function themeReducer(state = {themeColor: 'red'},action){
  switch(action.type){
    case 'CHANGE_COLOR': 
      return {...state,themeColor:action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer)

export default class Index extends Component {
  static childContextTypes = {
    store:PropTypes.object
  }

  //函数返回的对象就是context
  getChildContext(){
    return {store }
  }

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}