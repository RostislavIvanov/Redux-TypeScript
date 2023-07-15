import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/UseTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {

    const pages = [1, 2, 3, 4, 5]
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos} = useActions()
    useEffect(() => {
        fetchTodos()
    },[])

    if (loading)
        return <h1>Зарузка...</h1>
    if (error)
        return <h1>Ошибка: + {error}</h1>


    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
        </div>
    );
};

export default TodoList;