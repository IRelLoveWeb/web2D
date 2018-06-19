export default function createStore(reducer){
  let state;
  const listeners = [];
  const getState = () => state
  const subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({})
  return {getState,subscribe,dispatch}
}