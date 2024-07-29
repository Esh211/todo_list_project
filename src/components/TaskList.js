// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import SearchBar from './SearchBar';
import tasksData from '../data/tasks.json'; // Ensure this path is correct

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newTitle, newDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle, description: newDescription, timestamp: new Date().toLocaleString() } : task
    );
    setTasks(updatedTasks);
  };

  const markAsDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingTasks = filteredTasks.filter(task => !task.completed);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TaskForm addTask={addTask} />
      <div>
        <h2>Pending Tasks</h2>
        <div className="task-list">
          {pendingTasks.length === 0 ? <p>No pending tasks</p> : pendingTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              updateTask={updateTask} 
              markAsDone={markAsDone} 
            />
          ))}
        </div>
        <h2>Completed Tasks</h2>
        <div className="task-list">
          {completedTasks.length === 0 ? <p>No completed tasks</p> : completedTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              updateTask={updateTask} 
              markAsDone={markAsDone} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
