import { BUY_CAKE } from "./cakeTypes";

const cakeIntialState = {
    numOfCakes : 9
}

const cakeReducer = (state = cakeIntialState,action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes : state.numOfCakes - action.payload
        }
        default : return state
    }
}

export default cakeReducer