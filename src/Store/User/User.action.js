import { createAction } from "../../Utils/Reducer/Reducer.utils";
import USER_ACTION_TYPES from "./User.types";

//IF USING CURLY BRACKETS, REMEMBER TO RETURN THE OBJECT
export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
}

