import React, { useState } from 'react';
import { capitalize } from '../utils/formatUtils';
import { getLocationData } from '../utils/weatherAPI';
import Select from 'react-select';
import { components } from 'react-select';

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

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </components.DropdownIndicator>
      )
    );
  };

  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <Select
        classNamePrefix='my-select'
        components={{ DropdownIndicator }}
        options={options}
        value={searchValue}
        onChange={handleSelectChange}
        onInputChange={setSearchValue}
        placeholder='Search Location here...'
        noOptionsMessage={() => 'No matching locations found'}
      />
    </form>
  );
}

export default SearchBar;
