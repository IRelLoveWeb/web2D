import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  handleClick(color){
    const {store} = this.context;

    //console.log('before click:' + store.getState().themeColor)
    store.dispatch({
      type:'CHANGE_COLOR',
      themeColor:color
    })
    //console.log('after click:' + store.getState().themeColor)
  }

  render () {
    return (
      <div>
        <button style={{ color: this.state.themeColor }} onClick={()=>this.handleClick('red')}>Red</button>
        <button style={{ color: this.state.themeColor }} onClick={()=>this.handleClick('blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch