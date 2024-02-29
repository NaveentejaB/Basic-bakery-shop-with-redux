import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./ice/iceReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cake : cakeReducer,
    ice : iceReducer,
    user : userReducer
})

export default rootReducer