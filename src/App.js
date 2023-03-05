import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import useWeatherData from './utils/useWeatherData';
import Dashboards from './components/Dashboards';
import DailyForecast from './components/DailyForecast';

function App() {
  const [location, setLocation] = useState('New York');
  const weatherData = useWeatherData(location);

  return (
    <div className='main-container'>
      <Navbar />
      <div className='weather-container'>
        <Dashboards
          weatherData={weatherData}
          location={location}
          setLocation={setLocation}
        />
        <DailyForecast
          weatherData={weatherData}
          location={location}
          setLocation={setLocation}
        />
      </div>
    </div>
  );
}

export default App;
