import { configureStore,combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";


const store = configureStore({ reducer : rootReducer},applyMiddleware(thunk))

export default store