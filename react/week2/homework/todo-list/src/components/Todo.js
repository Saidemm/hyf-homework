import React, { useState} from 'react';

function Todo({id, todo, removeTodo}) {
    const[doneState, setDoneState] = useState(todo.isDone);

    function toggleState(){
        setDoneState(!doneState);
    }
   
    return (
        <div
            className="todo">
            <li style={{ textDecoration: doneState ? "line-through" : "" }}>
                {id},
                {todo.description}
            </li>
            <div>
                <input type="checkbox" checked={doneState?'checked':''} onChange={() => toggleState()}></input>
                <button onClick={() => removeTodo(id)}>Delete</button>{' '}
            </div>
        </div>
    );
}

export default Todo;

