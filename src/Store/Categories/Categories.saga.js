import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./Categories.action";
import { CATEGORIES_ACTION_TYPES } from "./Categories.types";


export function* fetchCategoriesAsync() {
    try {
        //another way to write getCategoriesAndDocuments('categories'), shown below
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))

    } catch(error) {
        yield put(fetchCategoriesFailed(error))
        //think of 'put' like dispatch

    }
}


export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
        ) //give me the latest action out of all that you hear

    // "Whenever we take the latest action, fetch the categories"
}
export function* categoriesSaga() {
    //"run everything inside and only complete when all is done in this line."
    //the next lines will not run unless this yield is finished
    yield all([call(onFetchCategories)]) 
}