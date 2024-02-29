import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./userTypes"

const intialUserState = {
    loading : false,
    data : [],
    error : ''
}

const userReducer = (state=intialUserState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            loading : true
        }
        case FETCH_USERS_SUCCESS: return{
            ...state,
            loading : false,
            data : action.payload,
            error : ''
        }
        case FETCH_USERS_FAILURE : return{
            ...state,
            loading : false,
            error : action.payload
        }
    }
}

export default userReducer