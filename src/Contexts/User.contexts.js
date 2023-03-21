import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../Utils/Firebase/Firebase";
import { createAction } from "../Utils/Reducer/Reducer.utils";

// the actual value I want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const userReducer = (state, action) => {

    const { type, payload } = action

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload //'anything after ..state, I will overwrite"
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }

}

const INITIAL_STATE = {
    currentUser: null
} 
// the actual component that will return something
//UserContext.Provider will be wrapped around anything that needs to be accessed by other components!
export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser } = state

    const setCurrentUser = (user) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
            )
    }
    // This allows the children to use any of the 'values' from the UserContext component
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        });

        return unsubscribe; //"unsubscribe whenever you unmount"
    }, [])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}