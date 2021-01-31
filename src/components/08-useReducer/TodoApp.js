import React, { useCallback, useEffect, useReducer } from 'react'
import './style.css';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import {TodoAdd} from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = useCallback((todoId) => () => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }, []);

    const handleToggle = useCallback((todoId) => () => {
        const action = {
            type: 'toggle',
            payload: todoId
        };
        dispatch(action);
    }, []);

    const handleAddTodo = (newTodo) => {
        dispatch(newTodo);
    };

    return (
        <div>
            <h1>TodoApp: ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                   <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
