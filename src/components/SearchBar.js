import React, { useState, useEffect } from 'react';
import { capitalize } from '../utils/formatUtils';
import { getLocationData } from '../utils/weatherAPI';
import Select from 'react-select';
import useDebounce from '../utils/hooks/useDebounce';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

function SearchBar(props) {
  const { setLocation, setLat, setLon } = props;
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState('No matching locations found');

  useDebounce(() => handleSearch(), 1000, [searchValue]);

  useEffect(() => {
    if (searchValue.length >= 1) {
      setMessage('Loading...');
    } else {
      setMessage('No matching locations found');
    }
  }, [searchValue]);

  useEffect(() => {
    if (options.length === 0) {
      setMessage('No matching locations found');
    }
  }, [options]);

  const handleSearch = async () => {
    if (searchValue === '') return;

    const cityResponse = await getLocationData(capitalize(searchValue));
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
    console.log('API called');
    setOptions(cityOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
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
    <>
      <button className='menu-button'>
        <Icon path={mdiMenu} size={2} />
      </button>
      <button className='search-button'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <form className='search-bar' onSubmit={handleSubmit}>
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
          noOptionsMessage={() => message}
        />
      </form>
    </>
  );
}

export default SearchBar;
