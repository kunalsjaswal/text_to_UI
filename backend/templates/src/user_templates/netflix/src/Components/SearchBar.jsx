import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <TextField
        variant="outlined"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        style={{ width: '300px' }}
        InputProps={{
          style: {
            borderColor: 'white',
            color: 'white'
          }
        }}
        InputLabelProps={{
          style: {
            color: 'white'
          }
        }}
      />
      <IconButton color="primary" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
