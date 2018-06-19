import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {createLogger} from 'redux-logger'

const Index = (satte ={},action) =>{
    switch(action.type){
        case 'A' : return state;
        default : return satte;
    }
}

export default createStore(Index,applyMiddleware(thunk,createLogger()));