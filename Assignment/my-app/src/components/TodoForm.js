import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a new todo..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className='btn btn-sm btn-success mx-3' type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoForm;
