import React from 'react';
import UserSearcherProvider from './components/UserSearcherProvider.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Github User Searcher </h1>
      <UserSearcherProvider />
    </div>
  );
}

export default App;
