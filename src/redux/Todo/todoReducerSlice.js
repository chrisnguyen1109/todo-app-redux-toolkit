import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        toggleStatusTodo(state, action) {
            const matchTodo = state.find(todo => todo.id === action.payload);

            matchTodo && (matchTodo.completed = !matchTodo.completed);
        },
    },
});
