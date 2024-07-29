// src/components/TaskForm.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import '../styles/App.css'; // Updated path

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TextField
        label="Task Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Task Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <Button type="submit" variant="contained">Add Task</Button>
    </form>
  );
};

export default TaskForm;
