import React, { useState } from 'react';
import { capitalize } from '../utils/formatUtils';
import { getLocationData } from '../utils/weatherAPI';
import Select from 'react-select';

function SearchBar(props) {
  const { setLocation, setLat, setLon } = props;
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const cityResponse = await getLocationData(capitalize(searchValue));
    console.log('API called');
    const cityOptions = cityResponse.map((city) => ({
      label: city.state
        ? `${city.name}, ${city.state}, ${city.country}`
        : `${city.name}, ${city.country}`,
      value: {
        city: city.name,
        state: city.state,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
      },
    }));
    setOptions(cityOptions);
  };

  const handleSelectChange = (selectedOption) => {
    const value = selectedOption.value;
    value.state
      ? setLocation(`${value.city}, ${value.state}`)
      : setLocation(`${value.city}, ${value.country}`);
    setLat(value.lat);
    setLon(value.lon);
    setSearchValue('');
  };

  return (
    <div className='search-bar-container'>
      <button>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <form className='search-bar' onSubmit={handleSearch}>
        <Select
          classNamePrefix='my-select'
          options={options}
          placeholder='Search Location here...'
          value={searchValue}
          inputValue={searchValue}
          onChange={handleSelectChange}
          onInputChange={(value, action) => {
            if (action.action === 'input-change') {
              setSearchValue(value);
            }
          }}
          noOptionsMessage={() => 'No matching locations found'}
        />
      </form>
    </div>
  );
}

export default SearchBar;
