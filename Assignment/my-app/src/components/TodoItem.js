import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    return (
        <div className='container-fluid'>
            <li className='list-group-item'>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch(toggleTodo(id))}
                />

                <span className={completed ? 'completed' : ''}>{text}</span>

                <button className='mx-5 btn btn-danger' onClick={() => dispatch(deleteTodo(id))}>Delete</button>
            </li>
        </div>
    );
};

export default TodoItem;
