import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./Categories/Categories.saga";

//generator functions are characterised by * . They are ES6 functions

export function* rootSaga() {
    yield all([call(categoriesSaga)]);
}