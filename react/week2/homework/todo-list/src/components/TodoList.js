import Todo from './Todo.js';
import React , { useState } from 'react';


export default function TodoList({inputTodos}) {
    const[todos, setTodos] = useState(inputTodos);
    
    function getRandomTodo() {
        let randomIndex = Math.floor(Math.random() * todos.length);
        return todos[randomIndex];
    }

    function addTodo() {
            setTodos(prev => [...prev,{
                id : prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
                description : getRandomTodo().description,
                isDone: false
            }]);       
        
    };
    
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    
    return (
        <div>
            <button onClick={addTodo}>Add a todo</button>
            <ul>{todos.length !== 0 ? todos.map(todoItem => 
                <Todo 
                    key={todoItem.id}
                    id={todoItem.id}
                    todo={todoItem}
                    removeTodo={removeTodo}
                ></Todo>
                ) : "NO Items!"}
            </ul>
        </div> 
    )
}
