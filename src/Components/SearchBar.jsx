import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchText, setsearchText] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      navigate(`/search/${searchText}`);

      searchText('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #1febee',
        pl: 2,
        boxShadow: '10px',
        mr: { sm: 10},
      }}
    >
      <input
        className='search-bar'
        placeholder='Search..'
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#1febee' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;