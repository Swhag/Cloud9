import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboards from './components/Dashboards';
import { getWeatherData } from './utils/weatherAPI';
import { getImage } from './utils/weatherImages';
import { setFilter } from './utils/backgroundFilter';

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

  if (!Object.keys(weatherData).length) {
    return <div>Loading...</div>;
  }

  const backgroundImage = {
    backgroundImage: `url(${getImage(weatherData.current.weather[0].icon)})`,
    backgroundSize: 'cover',
  };

  const backgroundFilter = {
    background: setFilter(weatherData.current.weather[0].icon),
  };

  return (
    <div className='main-container'>
      <div className='background-container' style={backgroundImage}>
        <div className='background-filter' style={backgroundFilter}></div>
      </div>

      <div className='navbar-container'>
        <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      </div>

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
  );
}

export default App;
