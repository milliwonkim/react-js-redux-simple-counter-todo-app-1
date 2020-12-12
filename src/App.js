import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import * as actions from './action/action';

function App({ props }) {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const dispatch = useDispatch();
    const value = useSelector((store) => store.value);

    const handleSubmit = (e) => {
        console.log('submit:');
        e.preventDefault();
        setTodos((prev) => [...prev, { todo, id: Math.random() }]);
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => id !== todo.id);
        setTodos(newTodos);
    };

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} />
                <button type='submit'>제출</button>
                <button onClick={() => dispatch(actions.addType(2))}>+2</button>
            </form>
            <ul>
                {todos.map((t) => {
                    return (
                        <li key={t.id} onClick={() => handleDelete(t.id)}>
                            {t.todo}
                            {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
