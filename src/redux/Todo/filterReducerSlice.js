import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        filterSearchTodo(state, action) {
            state.search = action.payload;
        },
        filterStatusTodo(state, action) {
            state.status = action.payload;
        },
        filterPriorityTodo(state, action) {
            state.priority = action.payload;
        },
    },
});
