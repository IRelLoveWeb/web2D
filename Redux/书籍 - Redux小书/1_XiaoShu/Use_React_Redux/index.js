import React,{Component} from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'

const store = createStore(commentsReducer)

export default ()=>(
  <Provider store={store}>
    <CommentApp />
  </Provider>
)