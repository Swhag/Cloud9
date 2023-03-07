import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboards from './components/Dashboards';
import DailyForecast from './components/DailyForecast';
import {
  getLocationData,
  getGeocodingData,
  getWeatherData,
} from './utils/weatherAPI';

function App() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { lat, lon } = await getGeocodingData(location);
      setLat(lat);
      setLon(lon);
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (lat && lon) {
        const weatherData = await getWeatherData(lat, lon);
        setWeatherData(weatherData);
      }
    };

    fetchData();
  }, [lat, lon]);

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
