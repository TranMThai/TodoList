import { createSelector } from "@reduxjs/toolkit";
import Filter from "../types/Filter";
import Todo from "../types/Todo";
import { STATUS_ALL, STATUS_COMPLETED, STATUS_TODO } from "../constants/StatusFilter";

interface IState {
    filter: Filter,
    todo: Todo[]
}

export const todoListSelector = (state: IState) => state.todo

export const filterSelector = (state: IState) => state.filter

export const filtedTodoListSelector = createSelector(
    [todoListSelector, filterSelector],
    (todoList, filter) => todoList
        .filter(todo => todo.name.toLowerCase().includes(filter.search.toLocaleLowerCase()))
        .filter(todo => filter.status === STATUS_ALL
            || (todo.status && filter.status === STATUS_TODO)
            || (!todo.status && filter.status === STATUS_COMPLETED))
        .filter(todo => filter.priority.length ? filter.priority.includes(todo.priority) : true)
)