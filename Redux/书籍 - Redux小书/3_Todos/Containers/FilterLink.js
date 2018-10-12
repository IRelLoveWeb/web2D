import {connect} from 'react-redux'
import {setFilter} from '../Redux/action'

import Link from '../Components/Link'

//state 是 store.getState()的值 ownprops 是改父组件给予的
const mapStateToProps = (state,ownProps) =>({
   active: ownProps.filter === state.visibilityFilter
})

//dispatch 是 store.dispatch
const mapDispatchToProps = (dispatch, ownProps) =>({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink