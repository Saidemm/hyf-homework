import  './components/UserSearcher.jsx'
import './App.css';


const Users = ['Sara', 'Milla', 'Hanieh']
function App() {
  return (
    <div className="App">
      <h1>Github </h1>
      <FetchUsers inputUser={Users} />
    </div>
  );
}

export default App;
