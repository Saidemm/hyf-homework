import React from 'react';

function Todo(props){
    return (
        <li>
            <h3>{props.item.id}- {props.item.description}</h3>
            <div>{props.item.deadlineDated}</div>
        </li>
    )
}

export default Todo;