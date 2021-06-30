// import './App.css';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/todos">Todos</Link>
//             </li>
//             <li>
//               <Link to="/newTodo">New Todo</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/Todos">
//             <Todos />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Todos() {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/todos")
//       .then((response) => response.json())
//       .then((data) => setTados(data));
//   }, [])
//   return <h2>Todos</h2>;
// }

// function NewTodo() {
//   return <h2>New Todo</h2>;
// }

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './Home';
import Todos from './Todos';
import NewTodo from './NewTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/newTodo">NewTodo</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/newTodo">
              <NewTodo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

