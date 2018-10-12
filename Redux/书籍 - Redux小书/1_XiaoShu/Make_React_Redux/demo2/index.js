import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Content from './Content'
import {Provider} from './react-redux'
import createStore from './redux'


function themeReducer(state = {themeColor: 'red'},action){
  switch(action.type){
    case 'CHANGE_COLOR': 
      return {...state,themeColor:action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer)

 class Index extends Component {

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default ()=>(
  <Provider store={store}>
    <Index/>
  </Provider>
)