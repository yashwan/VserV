import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import userReducer from './Reducer';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
};

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export { store, persistor };