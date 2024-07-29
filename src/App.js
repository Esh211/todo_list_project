// src/App.js
import React from 'react';
import TaskList from './components/TaskList';
// import './styles/App.css';
import './styles/App.css'; // Correct path

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskList />
    </div>
  );
};

export default App;
