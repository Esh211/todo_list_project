// src/components/TaskItem.js
import React, { useState } from 'react';
import { Button, Collapse, Typography, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import '../styles/App.css'; // Updated path

const TaskItem = ({ task, updateTask, markAsDone }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);
  const [isExpanded, setExpanded] = useState(false);

  const handleUpdate = () => {
    updateTask(task.id, newTitle, newDescription);
    setEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        {isEditing ? (
          <>
            <TextField
              variant="outlined"
              label="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              fullWidth
              style={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              label="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
              style={{ marginBottom: '10px' }}
            />
            <Button onClick={handleUpdate} variant="contained">Save</Button>
          </>
        ) : (
          <>
            <Typography variant="h6" className="title">
              {task.title}
            </Typography>
            <Typography variant="body2" className="description">
              {task.description}
            </Typography>
            <Typography variant="body2" className="timestamp">
              Last updated: {task.timestamp}
            </Typography>
            <div className="actions">
              <IconButton onClick={() => setEditing(true)}><EditIcon /></IconButton>
              <IconButton onClick={() => markAsDone(task.id)}>
                {task.completed ? <CancelIcon color="warning" /> : <CheckCircleIcon color="success" />}
              </IconButton>
            </div>
          </>
        )}
      </div>
      <Button className="expand-btn" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse in={isExpanded}>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
      </Collapse>
    </div>
  );
};

export default TaskItem;
