import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./userTypes"

// returns action
export const fetchUsersRequest = () => {
    return{
        action : FETCH_USERS_REQUEST,
    }
}

export const fetchUsersSuccess = (data) => {
    return{
        action : FETCH_USERS_SUCCESS,
        payload : data
    }
}
export const fetchUsersFailure = (error) => {
    return{
        action : FETCH_USERS_FAILURE,
        payload : error
    }
}

// returns function using thunk
export const getUsers = (dispatch) => {
    const usersRequest = async(dispatch)=>{
        try{
            dispatch(fetchUsersRequest())
            const response = await fetch('url')
            const result = await response.json()
            if(result.error){
                dispatch(fetchUsersFailure(result.message))
            }else{
                dispatch(fetchUsersSuccess(result.data))
            }
        }catch(err){
            console.log(err.message);
            dispatch(fetchUsersFailure(err.message))
        }
    }
    return{
        await usersRequest(dispatch)
    }
}