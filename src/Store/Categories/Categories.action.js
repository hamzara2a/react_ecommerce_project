import { createAction } from "../../Utils/Reducer/Reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./Categories.types";

setCategoriesMap = (categoriesMap) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP)
}