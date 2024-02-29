import { configureStore,applyMiddleware } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import axios from "axios"

const FETCH_USERS_REQUESTS = "FETCH_USERS_REQUESTS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

// intial state
const intialState = {
    loading : true,
    data : [],
    error : ''
}

// create actions

const fetchUsersRequests = () => {
    return{
        type : FETCH_USERS_REQUESTS
    }
}
const fetchUsersSuccess = (users) => {
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = (error) => {
    return{
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}


// creating reducer
const reducer = (state = intialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUESTS :
            return{
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCESS :
            return{
                ...state,
                users : action.payload,
                loading : false,
                error : ''
            }
        case FETCH_USERS_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
    }
}

const fetchUsers = () =>{
    const requesting = async(dispatch) =>{
        try{
            dispatch(fetchUsersRequests())
            const response = await axios.get('url')
            const result = await response.json()
            if(!result.error){
                dispatch(fetchUsersSuccess(result.users))
            }else{
                dispatch(fetchUsersFailure(result.message))
            }
        }catch(err){
            dispatch(fetchUsersFailure(err.message))
        }
    }
    return requesting
}

const store = configureStore(reducer,applyMiddleware(thunk))

store.subscribe(()=>{console.log(store.getState())})

store.dispatch(fetchUsers())