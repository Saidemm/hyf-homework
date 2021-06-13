import React, { useState, useEffect} from 'react';
import Header from "./components/Header.jsx"
import './App.css';
import Todos from "./components/Todos";

function App() {

    const [todoListItems, setTodoListItems] = useState("");

    useEffect(()=>{
     fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
      .then(response => response.json())
      .then((todoData) => {
        setTodoListItems(todoData); 
      })
    }, []);
     
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Todos todos = {todoListItems} setTodos= {setTodoListItems}/> 
    </div>
  );
}

export default App;
