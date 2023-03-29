import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SavedLocation from './pages/SavedLocation';
import Settings from './pages/Settings';
import Dashboards from './pages/Dashboards';
import { getWeatherData } from './utils/weatherAPI';
import { getImage } from './utils/weatherImages';
import { setFilter } from './utils/backgroundFilter';
import { setDashboardColor } from './utils/dashboardColor';

function App() {
  const [location, setLocation] = useState('Manhattan, NY');
  const [weatherData, setWeatherData] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [lat, setLat] = useState(40.7127);
  const [lon, setLon] = useState(-74.006);
  const [nav, setNav] = useState('show');
  const { autoSync, syncFrequency, unit, dynamicBackground } = useSelector(
    (state) => state.settings
  );

  useEffect(() => {
    const fetchData = async () => {
      if (lat && lon) {
        const weatherData = await getWeatherData(lat, lon, unit);
        setWeatherData(weatherData);
        console.log('API called');
      }
    };

    // console.log(weatherData);
    fetchData();
  }, [lat, lon, unit]);

  useEffect(() => {
    showNavbar === true ? setNav('show') : setNav('hide');
  }, [showNavbar]);

  const backgroundImage = {
    backgroundImage: dynamicBackground
      ? `url(${getImage(weatherData.current?.weather[0]?.icon || 'default')})`
      : `url(${getImage('default')}`,
    backgroundSize: 'cover',
  };

  const backgroundFilter = {
    backgroundColor: dynamicBackground
      ? setFilter(weatherData.current?.weather[0]?.icon || 'default')
      : setFilter('default'),
  };

  const dashboardStyle = {
    background: dynamicBackground
      ? setDashboardColor(weatherData.current?.weather[0]?.icon || 'default')
      : setDashboardColor('default'),
  };

  return (
    <div className='main-container'>
      <div className='background-container' style={backgroundImage}>
        <div className='background-filter' style={backgroundFilter}></div>/
      </div>

      <div className={`navbar-container ${nav}`}>
        <Navbar
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className='page-container'>
        <div className='top-bar-container'>
          <SearchBar
            location={location}
            setLocation={setLocation}
            setLat={setLat}
            setLon={setLon}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
          />

          <div className={`mobile-navbar-container ${nav}`}>
            <Navbar
              showNavbar={showNavbar}
              setShowNavbar={setShowNavbar}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        {currentPage === 'settings' && (
          <Settings dashboardStyle={dashboardStyle} />
        )}

        {currentPage === 'saved location' && (
          <SavedLocation
            weatherData={weatherData}
            location={location}
            lat={lat}
            lon={lon}
            setLat={setLat}
            setLon={setLon}
            dashboardStyle={dashboardStyle}
          />
        )}

        {currentPage === 'dashboard' && (
          <Dashboards
            weatherData={weatherData}
            location={location}
            setLocation={setLocation}
            setLat={setLat}
            setLon={setLon}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            setCurrentPage={setCurrentPage}
            dashboardStyle={dashboardStyle}
          />
        )}
      </div>
    </div>
  );
}

export default App;
