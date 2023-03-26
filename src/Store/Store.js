import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from "./Root-reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// this 'composes' our middleware
const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean)
const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer )
// the store only needs the root reducer in order to be created
export const store = createStore(persistedReducer, composedEnhancers)

export const persistor = persistStore(store);