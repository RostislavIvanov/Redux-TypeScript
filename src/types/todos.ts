export interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_USERS;
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_USERS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface SetPageTodoAction {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number
}

export type TodoAction = FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetPageTodoAction

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}