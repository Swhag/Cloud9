import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SavedLocation from './pages/SavedLocation';
import Settings from './pages/Settings';
import Dashboards from './pages/Dashboards';

import { getWeatherData } from './utils/weatherAPI';
import { setWeather, setLocation } from './redux/weatherSlice';
import {
  setShowNavbar,
  setCurrentPage,
  setBackgroundConfig,
  setBackgroundFilter,
  setDashboardStyle,
} from './redux/componentStylesSlice';

function App() {
  const dispatch = useDispatch();
  const { weatherData, location, lat, lon } = useSelector(
    (state) => state.weather
  );
  const {
    showNavbar,
    currentPage,
    backgroundConfig,
    backgroundFilter,
    dashboardStyle,
  } = useSelector((state) => state.componentStyles);
  const { autoSync, syncFrequency, unit, dynamicBackground } = useSelector(
    (state) => state.settings
  );
  const [nav, setNav] = useState('show');

  const styleComponents = () => {
    const icon = dynamicBackground
      ? weatherData.current?.weather[0]?.icon
      : 'default';

    dispatch(setBackgroundConfig(icon));
    dispatch(setBackgroundFilter(icon));
    dispatch(setDashboardStyle(icon));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (lat && lon) {
        const weatherData = await getWeatherData(lat, lon, unit);
        dispatch(setWeather(weatherData));
        console.log('API called');
      }
    };

    fetchData();
  }, [dispatch, lat, lon, unit]);

  useEffect(() => {
    styleComponents();
  }, [dispatch, weatherData, dynamicBackground]);

  useEffect(() => {
    showNavbar === true ? setNav('show') : setNav('hide');
  }, [showNavbar]);

  return (
    <div className='main-container'>
      <div className='background-container' style={backgroundConfig}>
        <div className='background-filter' style={backgroundFilter}></div>/
      </div>

      <div className={`navbar-container ${nav}`}>
        <Navbar />
      </div>

      <div className='page-container'>
        <div className='top-bar-container'>
          <SearchBar />

          <div className={`mobile-navbar-container ${nav}`}>
            <Navbar />
          </div>
        </div>

        {currentPage === 'settings' && <Settings />}

        {currentPage === 'saved location' && (
          <SavedLocation dashboardStyle={dashboardStyle} />
        )}

        {currentPage === 'dashboard' && (
          <Dashboards
            weatherData={weatherData}
            location={location}
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
