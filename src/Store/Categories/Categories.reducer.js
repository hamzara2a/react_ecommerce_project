

export const INITIAL_CATEGORY_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state=INITIAL_CATEGORY_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type) {

        case "SET_CATEGORIES_MAP":
            return {...state, categoriesMap: payload}
        default:
            return state

    }
}