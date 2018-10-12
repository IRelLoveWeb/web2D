import React,{Component} from 'react'

export default function Counter(props){
    return (
      <div>
          <div>{props.value}</div>
          <button onClick={() => props.addCount()}>+</button>
          <button onClick={() => props.delCount()}>-</button>
          <button onClick={() => setTimeout(() =>props.addCount(),500)}>dleayAdd</button>
      </div>
    )
}