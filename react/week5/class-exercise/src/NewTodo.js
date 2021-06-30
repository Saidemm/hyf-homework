import React from 'react'

export default function NewTodo() {
    function postNewTodo() {
        (async () => {
            await fetch('http://localhost:5000/todo', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        })();
    }

    return (
        <>
            <button onClick={postNewTodo}>NewTodo</button>
        </>
    );
}
