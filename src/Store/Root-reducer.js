import { combineReducers } from "redux";
import { userReducer } from "./User/User.reducer";


// we will have an object that contains the key of the reducer, and the actual reducer
export const rootReducer = combineReducers({
    user: userReducer

});