import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./Categories.types";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase";

export const setCategories = (categories) => {
    return createAction(
        CATEGORIES_ACTION_TYPES.SET_CATEGORIES, 
        categories
        )
}

export const fetchCategoriesStart = () => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray)

export const fetchCategoriesFailed = (error) => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    error)

//thunk recommends you declare your thunk functions with 'async'
export const fetchCategoriesAsync = () => async (dispatch) => {
    
    dispatch(fetchCategoriesStart());

    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))

    } catch(error) {
        dispatch(fetchCategoriesFailed(error))

    }
}