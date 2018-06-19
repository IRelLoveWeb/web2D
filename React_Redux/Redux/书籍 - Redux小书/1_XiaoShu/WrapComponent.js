import React,{Component} from 'react'

const Wrap = (component)=>{
  const WrapComponent = (props)=>(
    <component {...props} age={24} />
  )

  return WrapComponent
};

const App = (props)=>(
  <div>{`${props.name} : ${props.age}`}</div>
)

export default Wrap(App);