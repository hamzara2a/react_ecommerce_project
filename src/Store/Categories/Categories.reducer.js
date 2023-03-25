import { CATEGORIES_ACTION_TYPES } from "./Categories.types";

export const INITIAL_CATEGORY_STATE = {
    categories: []
}

export const categoriesReducer = (state=INITIAL_CATEGORY_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type) {

        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories: payload}
        default:
            return state

    }
}