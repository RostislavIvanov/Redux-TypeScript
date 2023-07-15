import {TodoAction, TodoActionTypes, TodoState} from "../../types/todos";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}


export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_USERS_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodoActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}