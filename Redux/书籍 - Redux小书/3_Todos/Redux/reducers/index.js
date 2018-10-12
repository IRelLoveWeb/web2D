import {combineReducers} from 'redux'

//动作类型
import {ADD_TODO,TOGGLE_TODO,SET_FILTER} from '../action'

//初始化了state,以及一系列动作的具体使用

const todos = (state=[],action) =>{
  switch (action.type){
    case ADD_TODO:
      return [...state,{
        id: action.id,
        text: action.text,
        completed: false
      }]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) ?Object.assign({},todo,{completed:!todo.completed}):todo
      )
    default:
      return state
  }
};

const visibilityFilter = (state= 'SHOW_ALL',action) =>{
  switch (action.type){
    case SET_FILTER:
      return action.filter;
    default:
      return  state;
  }
}

const todoApp = combineReducers({
  todos,visibilityFilter
})

export default todoApp

//定义了数据的表现形式,继续定义操作的形式