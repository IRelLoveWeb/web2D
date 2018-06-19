import { createStore, combineReducers, applyMiddleware } from 'redux'

//简易的redux中间件 middleware
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

//reducer
const ADDTODO = 'ADDTODO'

const addTodo = (text)=>({
  type:ADDTODO,
  text
})
const todoApp = (state='lyf',action) =>{
  switch(action.type){
    case ADDTODO: return action.text;
    default:return state;
  }
}


// applyMiddleware 接收 createStore()
// 并返回一个包含兼容 API 的函数。
let createStoreWithMiddleware = applyMiddleware(logger, crashReporter)(createStore)

// 像使用 createStore() 一样使用它。
//let todoApp = combineReducers(reducers)
let store = createStoreWithMiddleware(todoApp)

store.dispatch(addTodo('Use Redux'))