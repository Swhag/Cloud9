import React, { useState } from 'react';
import { capitalize } from '../utils/formatUtils';

function SearchBar(props) {
  const { setLocation } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(capitalize(searchTerm));
    setSearchTerm('');
    console.log(searchTerm);
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        type='text'
        placeholder='Search Location here...'
        name='search'
        autoComplete='off'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
