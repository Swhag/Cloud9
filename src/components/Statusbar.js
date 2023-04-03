import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLocation, removeLocation } from '../redux/savedLocationSlice';
import { toggleDynamicBackground, toggleUnit } from '../redux/settingSlice';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '../styles/topbar.css';

function Statusbar() {
  const dispatch = useDispatch();
  const { location, lat, lon } = useSelector((state) => state.weather);
  const { dashboardStyle } = useSelector((state) => state.componentStyles);
  const { savedLocations } = useSelector((state) => state.savedLocations);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const formattedDate = currentTime.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

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
      dispatch(removeLocation(newLocation.name));
      setIsSaved(false);
    } else {
      dispatch(addLocation(newLocation));
      setIsSaved(true);
    }
  };

  const isSavedLocation = savedLocations.some(
    (savedLocation) => savedLocation.name === location
  );

  const heartIcon = isSavedLocation ? (
    <AiFillHeart
      size={22}
      className={isSaved ? 'heart-icon saved-heart' : 'heart-icon'}
      onClick={handleAddLocation}
    />
  ) : (
    <AiOutlineHeart
      size={22}
      className='heart-icon'
      onClick={handleAddLocation}
    />
  );

  return (
    <div className='status-bar' style={dashboardStyle}>
      <div className='status-bar-date-time'>
        <span>{formattedTime}</span>
        <span>|</span>
        <span>{formattedDate}</span>
        <span>|</span>
        <div className='status-bar-location'>
          {heartIcon}
          {location}
        </div>
      </div>

      <div className='status-bar-toggle'>
        <div className='status-bar-toggle-group'>
          <span>Weather Background:</span>
          <BackgroundSetting />
        </div>
      </div>
    </div>
  );
}

function BackgroundSetting() {
  const dispatch = useDispatch();
  const { dynamicBackground } = useSelector((state) => state.settings);

  const handleDynamicBackgroundToggle = () => {
    dispatch(toggleDynamicBackground());
  };

  return (
    <li>
      <label className='toggle'>
        <input
          className='toggle-input'
          type='checkbox'
          checked={dynamicBackground}
          onChange={handleDynamicBackgroundToggle}
        />
        <div className='toggle-fill switch-color'>
          <span className='toggle-option'>On</span>
          <span className='toggle-option'>Off</span>
        </div>
      </label>
    </li>
  );
}

// function UnitToggle() {
//   const dispatch = useDispatch();
//   const { unit } = useSelector((state) => state.settings);

//   const handleUnitToggle = () => {
//     dispatch(toggleUnit());
//   };

//   return (
//     <label className='toggle'>
//       <input
//         className='toggle-input'
//         type='checkbox'
//         checked={unit === 'metric'}
//         onChange={handleUnitToggle}
//       />
//       <div className='toggle-fill switch-color'>
//         <span className='toggle-option'>°C</span>
//         <span className='toggle-option'>°F</span>
//       </div>
//     </label>
//   );
// }

export default Statusbar;
