import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from "./Root-reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './Root-saga';


// this 'composes' our middleware
const sagaMiddleware = createSagaMiddleware()
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean)
const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer )
// the store only needs the root reducer in order to be created
export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);