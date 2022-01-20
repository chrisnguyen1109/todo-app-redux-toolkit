import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import filterReducerSlice from './filterReducerSlice';
import todoReducerSlice from './todoReducerSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todoList'],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        filters: filterReducerSlice.reducer,
        todoList: todoReducerSlice.reducer,
    })
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
