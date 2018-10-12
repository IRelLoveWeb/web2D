import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

export default connect((state,props) =>({
  active:props.filter === state.visibilityFilter
}),(dispatch,props)=>({
  onClick:() => dispatch(setVisibilityFilter(props.filter))
}))(Link)