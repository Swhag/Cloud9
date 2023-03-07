import React, { useState, useEffect } from 'react';
import { capitalize } from '../utils/formatUtils';
import { getLocationData } from '../utils/weatherAPI';
import Autosuggest from 'react-autosuggest';

function SearchBar(props) {
  const { setLocation } = props;
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cityResponse = await getLocationData(capitalize(searchValue));
    console.log('API Called');
    const cityNames = cityResponse.map((city) => {
      if (city.state) {
        return `${city.name}, ${city.state}, ${city.country}`;
      } else {
        return `${city.name}, ${city.country}`;
      }
    });
    // console.log(cityResponse);
    // console.log(cityNames);
    setSuggestions(cityNames);
  };

  const handleSuggestionsFetchRequested = async ({ value }) => {
    console.log(value);
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleSuggestionSelected = (_, { suggestionValue }) => {
    // setLocation(suggestionValue);
    console.log(suggestionValue);
    setSearchValue('');
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        onSuggestionSelected={handleSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Search Location here...',
          value: searchValue,
          onChange: (_, { newValue }) => setSearchValue(newValue),
        }}
      />
    </form>
  );
}

export default SearchBar;
