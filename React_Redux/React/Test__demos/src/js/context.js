import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class A extends Component{
    constructor(){
      super();
      this.state = {
        color:'red'
      }
    }
    
    getChildContext(){
      return {
        color:this.state.color
      }
    }
    handleClick(){
      this.setState({color:'black'})
    }
    render(){
      return (
        <div>
          <div style={{color:this.state.color}}>TTT</div>
        <button onClick={()=>this.handleClick()}>Change Color</button>
          <B />
          </div>
      )
    }
  }
  
  A.childContextTypes={
    color:PropTypes.string
  }
  
  function B(props,context){
    return <div>
        {context.color}
        {props.name}
        <br />
        <C />
    </div>
  }
  
  B.defaultProps = {
    name:2
  }

  B.propTypes ={
      name:PropTypes.number
  }

  B.contextTypes={
    color:PropTypes.string
  }

  class C extends Component{
      render(){
          return (
            <div style={{color:this.context.color}}>T</div>
          )
      }
  }
  
  C.prototype.shouldComponentUpdate = () =>{
      return false;
  }

  C.contextTypes={
    color:PropTypes.string
  }
  
  ReactDOM.render(
    <A />,
    document.getElementById('root')
  );
  
/* 
  A组件为context根组件,改变state带动context变化【red => black】;
  C组件 shouldComponentUpdate 返回true, C组件context 跟新为 black
  C组件 shouldComponentUpdate 返回false, C组件context 未更新，依旧为red

  函数组件 是无状态组件,只能通过参数传递props,context【设置了contextTypes才有该参数】，
  且无生命周期函数;
  有静态属性 propTypes contextTypes defaultProps ;
  propsTypes类型检查在defaultProps之后
*/

