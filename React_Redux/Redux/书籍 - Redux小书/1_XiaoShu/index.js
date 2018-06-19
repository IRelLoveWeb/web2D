import React,{Component} from 'react'
import {render} from 'react-dom'

//import WrapComponent from './WrapComponent'
import ContextComponent from './Context'
import ReactRedux from './Make_React_Redux/index'
import UseReactRedux from './Use_React_Redux/index'

const Index = ()=>(
  <div>
    <UseReactRedux />
    {/*<ReactRedux />
    <ContextComponent/>
    <WrapComponent name="lyf" />*/}
  </div>
)

render(
    <Index />
  ,
  document.getElementById('root')
)