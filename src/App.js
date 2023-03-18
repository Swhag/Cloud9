import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboards from './components/Dashboards';
import { getWeatherData } from './utils/weatherAPI';

function App() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lat, setLat] = useState(40.7127);
  const [lon, setLon] = useState(-74.006);

  useEffect(() => {
    const fetchData = async () => {
      if (lat && lon) {
        const weatherData = await getWeatherData(lat, lon);
        setWeatherData(weatherData);
      }
    };

    fetchData();

    console.log('API called');
  }, [lat, lon]);

  return (
    <div className='main-container'>
      <Navbar showNavbar={showNavbar} />
      <div className='dashboard-container'>
        <Dashboards
          weatherData={weatherData}
          location={location}
          setLocation={setLocation}
          setLat={setLat}
          setLon={setLon}
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
      </div>
    </div>
  );
}

export default App;
