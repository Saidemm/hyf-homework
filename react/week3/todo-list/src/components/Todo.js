import React, { useState } from 'react';
import Border from './Border';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import moment from 'moment';



function Todo({ id, todos, setInputValue, removeTodo, deadline, description }) {
    const [doneState, setDoneState] = useState(false);
    const [isEditState, setIsEditState] = useState(false)
    const [newDescription, setNewDescription] = useState(description)

    const onEdit = () => {
        return (
            setIsEditState(!isEditState)
        )
    }


    const onUpdate = (id) => {     
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.description = newDescription;
            }
            return todo;
        });   
        
        setInputValue(newTodos);
        setIsEditState(false);
    }

    function toggleState() {
        setDoneState(!doneState);
    }

    return (
        <Border>
            <Form.Row className="align-items-center">
                <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox"
                        checked={doneState ? 'checked' : ''}
                        onChange={() => toggleState()}
                        label={`${id} - ${description} | ${moment(deadline).format('MM/DD/YYYY')}`}
                    />
                </Form.Group>
                <Button variant="outline-danger" onClick={() => removeTodo(id)}>Delete</Button> {' '}
                <Button variant="info" onClick={() => onEdit(id)}>Edit</Button>
                {
                    isEditState &&
                    <InputGroup>
                        <Form.Control type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <Button
                            variant="info" onClick={() => onUpdate(id)}>Update
                        </Button>
                    </InputGroup>
                }
            </Form.Row>
        </Border>
    );
}


export default Todo;