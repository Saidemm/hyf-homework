import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/newTodo'>NewTodo</Link>
            </li>
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/newTodo'>
            <NewTodo />
          </Route>
          <Route exact path='/todos'>
            <Todos />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function NewTodo() {
  const [inputValue, setInputNoSpaces] = useValidation("", (input) => input.replace(" ", "") );

  function postNewTodo() {
    (async () => {
      await fetch('http://localhost:5000/todo', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({description : inputValue}) // body data type must match "Content-Type" header
      });

    })();
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={e => setInputNoSpaces(e.target.value)}/> 
      <button onClick={postNewTodo}>Post Todo</button>
    </>
  );
}

function useValidation(init, validator) {
  const [inputValue, setInputValue] = useState(init);

  function setValidation(input) {
    setInputValue(validator(input));
  }
   
  return [inputValue, setValidation]
}

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const responseJson = await fetch('http://localhost:5000/todos');
      const response = await responseJson.json();
      setTodos(response);
    })();
  }, []);

  return (
    <>
      <div>
        <h1>Todos list</h1>
      </div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} description={todo.description}></Todo>;
        })}
      </ul>
    </>
  );
}

function NoMatch() {
  return <div>Oops. Page does not exist</div>;
}

function Todo({ description }) {
  return (
    <li>
      <h2>{description}</h2>
    </li>
  );
}
