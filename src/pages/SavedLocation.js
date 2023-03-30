import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLocation, removeLocation } from '../redux/savedLocationSlice';

import {
  BsFillPlusCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import '../styles/savedLocation.css';

function SavedLocation(props) {
  const dispatch = useDispatch();
  const { location, lat, lon, setLat, setLon, dashboardStyle } = props;
  const { savedLocations } = useSelector((state) => state.savedLocations);
  const [isMounted, setIsMounted] = useState(false);

  const handleAddLocation = () => {
    const newLocation = {
      name: location,
      lat: lat,
      lon: lon,
    };

    const isDuplicateName = savedLocations.some(
      (savedLocation) => savedLocation.name === newLocation.name
    );

    if (isDuplicateName) {
      // Handle duplicate name event
      const existingLocation = document.getElementById(
        `saved-location-${newLocation.name}`
      );

      if (existingLocation) {
        existingLocation.classList.add('shake');
        setTimeout(() => {
          existingLocation.classList.remove('shake');
        }, 500);
      }
    } else {
      dispatch(addLocation(newLocation));
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`saved-location-container ${isMounted ? 'fade-in' : ''}`}
      style={dashboardStyle}
    >
      <div className='saved-location-group'>
        <h2>Current Location:</h2>

        <div className='saved-current-location'>
          <h4>{location}</h4>
          <div className='saved-current-add'>
            <span>Add</span>
            <BsFillPlusCircleFill
              size={24}
              className='saved-location-icons-add'
              onClick={handleAddLocation}
            />
          </div>
        </div>
      </div>
      <div className='saved-location-group'>
        <LocationsList savedLocations={savedLocations} />
      </div>
    </div>
  );
}

function LocationsList(props) {
  const dispatch = useDispatch();
  const { savedLocations } = props;
  const [edit, setEdit] = useState(false);

  const handleLocationPick = (location) => {
    console.log(location);
  };

  const handleRemoveLocation = (location) => {
    dispatch(removeLocation(location));
  };

  return (
    <div className='saved-location-list'>
      <h2>Saved Locations:</h2>
      <ul>
        {savedLocations.map((location, index) => (
          <LocationListItem
            key={index}
            location={location}
            index={index}
            handleLocationPick={handleLocationPick}
            handleRemoveLocation={handleRemoveLocation}
            edit={edit}
          />
        ))}
      </ul>
      <button className='saved-location-button' onClick={() => setEdit(!edit)}>
        {edit ? <span>Finish</span> : <span>Edit</span>}
      </button>
    </div>
  );
}

function LocationListItem(props) {
  const { location, index, handleLocationPick, handleRemoveLocation, edit } =
    props;
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setShowItem(true);
    const timer = setTimeout(() => setShowItem(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='list-item-block'>
      <li
        key={index}
        id={`saved-location-${location.name}`}
        className={`${showItem ? 'list-fade-in' : ''} ${
          edit ? 'list-shorten' : ''
        }`}
        onClick={() => handleLocationPick(location)}
      >
        <h4>{location.name}</h4>
        <BsFillArrowRightCircleFill size={24} />
      </li>
      <MdOutlineRemoveCircle
        size={30}
        className='list-item-delete-button'
        onClick={() => handleRemoveLocation(location.name)}
      />
    </div>
  );
}

export default SavedLocation;
