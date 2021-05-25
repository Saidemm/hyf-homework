import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    return (
        <ul>
            <h1>Todo List</h1>
            {props.todos.map((list) =>  <Todo key={list.id} item={list}/>)}
        </ul>
    )
}

export default TodoList; 