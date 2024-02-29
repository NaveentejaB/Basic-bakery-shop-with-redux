import {BUY_ICE} from './iceTypes'

const iceIntialState = {
    numOfIces : 16
}

const iceReducer = (state=iceIntialState,action)=>{
    switch(action.type){
        case BUY_ICE : return{
            ...state,
            numOfIces : state.numOfIces - 1
        }
        default : return state
    }
}

export default iceReducer