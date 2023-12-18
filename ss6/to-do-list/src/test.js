import { useEffect, useState } from "react";
import * as TodoService from "../services/TodoService";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState({
        userId: "",
        title: "",
    });

    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {
        try {
            const todoList = await TodoService.findAll();
            setTodoList(todoList);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const todo = {
                userId: newTodo.userId,
                title: newTodo.title,
                completed: false,
            };
            const createdTodo = await TodoService.create(todo);
            setTodoList([...todoList, createdTodo]);
            setNewTodo({
                userId: "",
                title: "",
                completed: false,
            });
            alert("Add new to do successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    const handleCompleteChange = async (todoId) => {
        try {
            const updateTodoList = todoList.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });

            setTodoList(updateTodoList);
            await TodoService.update(todoId, {
                completed: !todoList.find((todo) => todo.id === todoId).completed,
            });
            alert("Completed to do successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="text-center">To do List</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User id:</label>
                    <input
                        type="text"
                        id="userId"
                        placeholder="Enter user id"
                        onChange={(e) => {
                            setNewTodo({
                                ...newTodo,
                                userId: e.target.value,
                            });
                        }}
                    />
                </div>
                <div >
                    <label htmlFor="title">To do title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter to do title"
                        onChange={(e) => {
                            setNewTodo({
                                ...newTodo,
                                title: e.target.value,
                            });
                        }}
                    />
                    <small id="to-do-title" >
                        You must completed your to do before ur day end.
                    </small>
                </div>
                <button type="submit" >
                    Submit
                </button>
            </form>
            <table >
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todoList.map((todo) => (
                    <tr key={`${todo.userId}_${todo.id}`}>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleCompleteChange(todo.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoApp;






