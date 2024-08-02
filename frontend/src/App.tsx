import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTask />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

export default App;