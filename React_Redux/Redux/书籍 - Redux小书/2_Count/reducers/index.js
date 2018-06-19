export const COUNT_ADD = 'ADD'
export const COUNT_DEL = 'DEL'

export default (state = 0,action) =>{
  switch (action.type){
    case COUNT_ADD: return state + 1;
    case COUNT_DEL: return state - 1;
    default: return state ;
  }
}