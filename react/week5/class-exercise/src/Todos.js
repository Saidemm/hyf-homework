import React, { useEffect, useState } from 'react'

function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
    }, []);
    return (
        <div>{todos.map(todo => {
            return <div key={todo.id}>{todo.description}</div>
        })}</div>
    )
}

export default Todos;