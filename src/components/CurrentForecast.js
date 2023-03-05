import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

function CurrentForecast(props) {
  const { weatherData } = props;
  const [location, setLocation] = useState('New York');
  const current = weatherData.current;

  return (
    <div className='weather-today'>
      <div>Location search bar</div>
      {current && (
        <div>
          <div>{location}</div>
          <div>{Math.round(current.temp)}°F</div>
          <div>{current.weather[0].description}</div>
        </div>
      )}
      <div>
        <div>wind</div>
        <div>rain chance</div>
        <div>wind</div>
        <div>wind</div>
      </div>
      <div>WeatherIcon</div>
    </div>
  );
}

export default CurrentForecast;
