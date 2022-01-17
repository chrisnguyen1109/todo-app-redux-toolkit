import { createSelector } from 'reselect';

export const todoListSelector = state => state.todoList;
export const filterSearchSelector = state => state.filters.search;
export const filterStatusSelector = state => state.filters.status;
export const filterPrioritySelector = state => state.filters.priority;

export const remainingTodoListSelector = createSelector(
    todoListSelector,
    filterSearchSelector,
    filterStatusSelector,
    filterPrioritySelector,
    (todoList, search, status, priority) => {
        return todoList
            .filter(todo => todo.name.includes(search))
            .filter(
                todo =>
                    status === 'All' || (status === 'Completed' ? todo.completed : !todo.completed)
            )
            .filter(todo => priority.length === 0 || priority.includes(todo.priority));
    }
);
