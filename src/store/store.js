import { configureStore } from '@reduxjs/toolkit';
import {compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import redux from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// };

//const sagaMiddleware = createSagaMiddleware();

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// const composeEnhancer = 
//     (process.env.NODE_ENV !== 'production' && 
//     window && 
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
//     compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); 

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});

//sagaMiddleware.run(rootSaga);

//export const persistor = persistStore(store);