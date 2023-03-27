import React, { useState } from 'react';
import {
  BsFillPlusCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import '../styles/savedLocation.css';

function SavedLocation(props) {
  const { weatherData, location, setLat, setLon } = props;
  const [savedLocations, setSavedLocations] = useState([]);

  const handleSaveLocation = () => {
    const newLocation = {
      name: location,
      lat: weatherData.lat,
      lon: weatherData.lon,
    };

    // Check if the location name is already in the savedLocations array
    let isDuplicateName = false;
    savedLocations.forEach((savedLocation) => {
      if (savedLocation.name === newLocation.name) {
        isDuplicateName = true;
      }
    });

    // If the location name is not a duplicate, add it to the savedLocations array
    if (!isDuplicateName) {
      setSavedLocations([...savedLocations, newLocation]);
    }
  };

  return (
    <div className='saved-location-container'>
      <div className='saved-location-group'>
        <h2>Current Location:</h2>
        <div className='saved-current-location'>
          <h3>{location}</h3>
          <BsFillPlusCircleFill
            size={24}
            className='saved-location-icons'
            onClick={handleSaveLocation}
          />
        </div>
      </div>
      <div className='saved-location-group'>
        <LocationsList locations={savedLocations} />
      </div>
    </div>
  );
}

function LocationsList(props) {
  const { locations } = props;

  const handleLocationPick = (lat, lon) => {
    console.log(lat, lon);
  };

  return (
    <div className='saved-location-list'>
      <h2>Saved Locations:</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <h4>{location.name}</h4>
            <div>
              <BsFillArrowRightCircleFill
                size={24}
                className='saved-location-icons'
                onClick={() => handleLocationPick(location.lat, location.lon)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedLocation;
