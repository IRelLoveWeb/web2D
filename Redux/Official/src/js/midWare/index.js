import React,{Component} from 'react'
import {Provider,connect} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'

import logger from './logger'
import timeoutScheduler from './timeoutScheduler '

const reducers = (state=1,action) =>{
  switch(action.type){
    case 'ADD':
      return state+1;
    case 'DEL':
      return state-1;
    default:
      return state
  }
}

const store = createStore(reducers,applyMiddleware(logger,timeoutScheduler));

export default class MidWare extends Component{
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

class Index extends Component{
  render(){
    let {count,dispatch} = this.props;

    return (
      <div>
        <button onClick={() => {
          let dis = dispatch({type:'ADD',meta:{delay:2000}});
          console.log('disReturn:' + dis);
        }}>增加</button>
        <button onClick={() => dispatch({type:'DEL'})}>减少</button>
        {count}
      </div>
    )
  }
}

Index = connect(state =>({count:state}))(Index)