import {Dispatch} from "redux";
import {ITodo, TodoAction, TodoActionTypes} from "../../types/todos";
import axios from "axios";

export const fetchTodos = () : any => {
    return async (dispatch : Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_USERS})
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            dispatch({type: TodoActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({type: TodoActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке списка дел'})
        }
    }
}