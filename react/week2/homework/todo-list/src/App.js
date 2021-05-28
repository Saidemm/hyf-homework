import WatchCount from './components/Counter.js';
import TodoList from './components/TodoList.js';
import './App.css';

const todoListItems = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];


function App() {
  return (
    <div className="App">
        <WatchCount></WatchCount>    
        <TodoList inputTodos = {todoListItems} />
    </div>
  );
}

export default App;

