import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./Categories.types";

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

