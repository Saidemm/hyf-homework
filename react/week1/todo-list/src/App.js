import './App.css';
import TodoList from './Todos.jsx'

const todoListItems = [
  {
    id : 1,
    description : "Do your homework",
    deadlineDated : "Wed 20-6-2021" 
  },
  {
    id : 2,
    description : "Make a CV",
    deadlineDated : "Fri 10-6-2021" 
  },
  {
    id : 3,
    description : "Update your LinkedIn",
    deadlineDated : "Wed 20-7-2021" 
  }
]

function App() {
  return (
    <div className="App">
        <TodoList todos={todoListItems} />
    </div>
  );
}

export default App;
