import React, { useState } from 'react';
import '../styles/searchBar.css';

function SearchBar(props) {
  const { setLocation } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(searchTerm);
    console.log(searchTerm);
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input
        type='text'
        placeholder='Search Location here...'
        name='search'
        autoComplete='off'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type='submit' className='search-icon'></button>
    </form>
  );
}

export default SearchBar;
