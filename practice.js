import { configureStore,combineReducers,applyMiddleware } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"

const BUY_CAKE = 'BUY_CAKE'
const ICE = 'ICE'

// const buyCake = () =>{
//     return{
//         type : BUY_CAKE,
//         info : 'First Reducer Action.'
//     }
// }

const intialState = {
    noOfCakes : 6
}

const intialCake = {
    numCakes : 9
}
const inialIce = {
    numIce : 6
}

const buyCake = () => {
    return{
        type : BUY_CAKE,
    }
}

const buyIce = () => {
    return{
        type : ICE,
    }
}

const cakeReducer = (state=intialCake,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numCakes : state.numCakes - 1
        }
        default : return state
    }
}

const iceReducer = (state=inialIce,action) => {
    switch(action.type){
        case ICE : return {
            ...state,
            numIce : state.numIce - 1
        }
        default : return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    ice : iceReducer
})

// const reducer = (state=intialState,action) => {
//     switch(action.type){
//         case BUY_CAKE : return {
//             ...state,
//             noOfCakes : state.noOfCakes -1
//         }
//         default : return state
//     }
// }

const logger = createLogger()
const store = configureStore(rootReducer,applyMiddleware(logger))
console.log('Intial',store.getState())

const unsubscribe = store.subscribe(()=> console.log('updated'))

store.dispatch(buyCake)
store.dispatch(buyCake)
store.dispatch(buyCake)

unsubscribe()

