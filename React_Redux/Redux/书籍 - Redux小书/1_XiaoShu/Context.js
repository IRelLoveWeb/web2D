import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Index extends Component{
  static childContextTypes = {
    color:PropTypes.string
  }

  constructor(){
    super()
    this.state = {
      count:1
    }
  }

  //返回的对象就是context
  getChildContext(){
    return {color:'red'}
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({count:2})
    },5000)
  }

  render(){
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}


class Header extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
    )
  }
}

class Title extends Component {
  static contextTypes = {
    color:PropTypes.string
  }
  render () {
    return (
      <h1 style={{color:this.context.color}}>React.js 小书标题</h1>
    )
  }
}

/*Title.contextTypes = {
  color:PropTypes.string
}*/


class Content extends Component {
  static contextTypes = {
    color:PropTypes.string
  }

  constructor(){
    super()
    this.state = {
      count:1
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.context.color = "blue";
      this.setState({count:2})
    },1000)
  }

  render () {
    return (
    <div>
      <h2 style={{color:this.context.color}}>React.js 小书内容</h2>
    </div>
    )
  }
}

//单向数据流  
//子组件可以读取父组件设置的context,但是修改context只在子组件中生效
//可见数据的单向