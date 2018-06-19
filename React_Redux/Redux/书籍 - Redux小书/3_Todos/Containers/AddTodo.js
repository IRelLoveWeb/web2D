import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../Redux/action'

let AddTodo = ({dispatch})=>{
  let input

  return (
    <div>
      <input ref={node => {
          input = node
        }} />
      
      <button onClick={()=>{
        if(!input.value) return;

        dispatch(addTodo(input.value));
        
        input.value = ''
      }}>Add</button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo