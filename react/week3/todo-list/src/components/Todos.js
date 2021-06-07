import Todo from './Todo.js';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';



export default function Todos({ todos, setTodos }) {
    console.log('todos', todos);
    const [inputValue, setInputValue] = useState("");
    const [deadline, setDeadline] = useState(null);

    function getRandomTodo() {
        let randomIndex = Math.floor(Math.random() * todos.length);
        console.log(randomIndex);
        console.log('todos', todos);
        return todos[randomIndex];
    }

    function addTodo() {
        if (inputValue === "") {
            let randomToDo = getRandomTodo();
            setTodos((prev) => {
                const newRandomTodo = {
                    id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
                    description: randomToDo.description,
                    deadline: randomToDo.deadline,
                    isDone: false
                };
                return [...prev, newRandomTodo];
            });
        } else {
            setTodos((prev) => {
                const newTodo = {
                    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
                    description: inputValue,
                    deadline: moment(deadline).format('YYYY-MM-DD')
                };
                return [...prev, newTodo];
            })
        }

    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }


    return (
        <div>
            <Form>
                <InputGroup>
                    <Form.Label>Todo description</Form.Label>
                    <Form.Control type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Description"
                    />
                </InputGroup>
                <span>Deadline</span>
                <DatePicker
                    selected={deadline}
                    onChange={date => setDeadline(date)}
                    dateFormat='yyyy/MM/dd'
                    minDate={new Date()}
                />
                <br />
                <Button onClick={addTodo}>Add a todo</Button>
                <ul>{todos.length !== 0 ? todos.map(todoItem =>
                    <Todo
                        key={todoItem.id}
                        id={todoItem.id}
                        description={todoItem.description}
                        deadline={todoItem.deadline}
                        todos={todos}
                        setInputValue={setTodos}
                        removeTodo={removeTodo}
                    ></Todo>
                ) : "NO Items!"}
                </ul>
            </Form>
        </div>
    )
}