import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import useWeatherData from '../utils/useWeatherData';

import CurrentForecast from './CurrentForecast';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

function Weather(props) {
  const [location, setLocation] = useState('New York');
  const weatherData = useWeatherData(location);

  return (
    <div className='weather-container'>
      <CurrentForecast weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </div>
  );
}

export default Weather;
