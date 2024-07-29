// src/components/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';
import '../styles/App.css'; // Updated path

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <TextField
        label="Search Tasks"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
