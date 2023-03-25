import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./Categories.types";

export const setCategories = (categories) => {
    return createAction(
        CATEGORIES_ACTION_TYPES.SET_CATEGORIES, 
        categories
        )
}