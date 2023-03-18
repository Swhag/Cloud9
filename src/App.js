import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboards from './components/Dashboards';
import { getWeatherData } from './utils/weatherAPI';
import { getImage } from './utils/weatherImages';
import {
  clearDay,
  clearNight,
  fewCloudsDay,
  fewCloudsNight,
  scatteredCloudDay,
  scatteredCloudNight,
  brokenCloudsDay,
  brokenCloudsNight,
  showerDay,
  rainNight,
  rainDay,
  thunder,
  snowDay,
  snowNight,
  mistDay,
  mistNight,
} from './utils/weatherImages';

function App() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lat, setLat] = useState(40.7127);
  const [lon, setLon] = useState(-74.006);

  const backgroundImage = {
    // backgroundImage: `url(${getImage(weatherData.current.weather[0].icon)})`,
    backgroundImage: `url(${fewCloudsDay})`,
    backgroundSize: 'cover',
  };

  const backgroundFilter = {
    background: 'rgba(0, 0, 0, 0.2)',
  };

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

  return (
    <div className='main-container'>
      <div className='background-container' style={backgroundImage}>
        <div className='background-filter' style={backgroundFilter}></div>
      </div>
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
