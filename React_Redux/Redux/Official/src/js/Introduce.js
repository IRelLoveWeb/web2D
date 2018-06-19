import React,{Component} from 'react';
import {createStore} from 'redux';

const reducer = (state={count:0},action) =>{
  switch(action.type){
    case 'ADD' : 
      return {count:state.count+1};
    case 'SUB' :
      return {count:state.count-1};
    default:
      return state;
  }
}

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});
store.dispatch({type:'SUB'});
export default () => <div>1234</div>;