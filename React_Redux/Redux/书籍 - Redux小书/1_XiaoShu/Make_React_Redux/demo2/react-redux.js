import React,{Component} from 'react'
import PropTypes from 'prop-types'


export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}


const  connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor(){
      super()
      this.state = { allProps:{}}
    }

    componentWillMount () {
      const { store } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const { store } = this.context
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
}

export default connect

//通过 mapStateToProps, mapDispatchToProps 函数控制传入dump组件的参数
//每调用一次connect函数,就注册一个事件
//每执行一次dispatch 就是调用所有注册的事件
//而每一个注册的事件都setState，但是dispatch时只是改变了state中的部分数据,有部分数据是未改变的，
//所以在setState之前,调用shouldComponentUpdate函数进行一次判断,组件是否重新加载

//dispatch 先更新state数据,在执行所有的注册事件;即mapStateToProps, mapDispatchToProps 必须重新被调用 


