
const INITIAL_STATE = {
    currentUser: null
} 

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
export const userReducer = (state=INITIAL_STATE, action) => {

    const { type, payload } = action

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload //'anything after ..state, I will overwrite"
            }
        default:
            return state
    }

}

// we use cases to make sure the unrelated reducer does not respond to foreign action