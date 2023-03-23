import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./Root-reducer";

// this 'composes' our middleware
const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares))

// the store only needs the root reducer in order to be created
export const store = createStore(rootReducer, undefined, composedEnhancers)