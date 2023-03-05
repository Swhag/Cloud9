import React, { useState } from 'react';

function SearchBar(props) {
  const { setLocation } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(searchTerm);
    console.log(searchTerm);
  };

  return (
    <form className='search-box' onSubmit={handleSubmit}>
      <input
        className='search-box-input'
        type='text'
        placeholder='Search Location...'
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
