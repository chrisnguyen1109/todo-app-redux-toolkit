import { configureStore } from '@reduxjs/toolkit';

import filterReducerSlice from './filterReducerSlice';
import todoReducerSlice from './todoReducerSlice';

const store = configureStore({
    reducer: {
        filters: filterReducerSlice.reducer,
        todoList: todoReducerSlice.reducer,
    },
});

export default store;
