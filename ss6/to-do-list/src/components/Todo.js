// src/component/TodoList.js
import React, { useState, useEffect } from 'react';
import {fetchTodos, findAll, submitTask} from '../service/TodoService';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {
        try {
            const todosData = await findAll();
            setTodos(todosData);
        } catch (error) {
            console.error('Error find all todos:', error);
        }
    };

    const handleTaskSubmit = async () => {
        try {
            await submitTask(newTask);
            alert('Todo task added successfully!');
            setNewTask('');
            getTodoList();
        } catch (error) {
            alert(error.message || 'Error adding todo task. Please try again.');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter your todo task"
            />
            <button onClick={handleTaskSubmit}>Submit</button>

            <h2>Todo List:</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
