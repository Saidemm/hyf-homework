import React from 'react';

function TodoDetails(props){
    return (
        <li>
            <h3>{props.item.id}- {props.item.description}</h3>
            <div>{props.item.deadlineDated}</div>
        </li>
    )
}

const TodoList = (props) => {
    return (
        <ul>
            <h1>Todo List</h1>
            {props.todos.map((list) => {
                return (
                    <TodoDetails key={list.id} item={list}/>
                )
                }
            )}
        </ul>
    )
}

export default TodoList; 