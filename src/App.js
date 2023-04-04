import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import Statusbar from './components/Statusbar';
import SearchBar from './components/SearchBar';
import SavedLocation from './pages/SavedLocation';
import Settings from './pages/Settings';
import Dashboards from './pages/Dashboard';
import { getWeatherData, getReverseLocationData } from './utils/weatherAPI';
import { setWeather, setLocation, setLat, setLon } from './redux/weatherSlice';
import {
  addCurrentLocationName,
  addCurrentLocationLat,
  addCurrentLocationLon,
} from './redux/savedLocationSlice';

import {
  setShowNavbar,
  setBackgroundConfig,
  setBackgroundFilter,
  setDashboardStyle,
} from './redux/componentStylesSlice';

function App() {
  const dispatch = useDispatch();
  const { weatherData, lat, lon } = useSelector((state) => state.weather);
  const { showNavbar, currentPage, backgroundConfig, backgroundFilter } =
    useSelector((state) => state.componentStyles);
  const { autoDetect } = useSelector((state) => state.savedLocations);
  const { autoSync, syncFrequency, unit, dynamicBackground } = useSelector(
    (state) => state.settings
  );
  const [nav, setNav] = useState('show');
  const mobileNavbarRef = useRef(null);

  useEffect(() => {
    const fetchData = async (lat, lon) => {
      const [locationData] = await getReverseLocationData(lat, lon);
      const { name, state, country } = locationData;
      const locationName = state ? `${name}, ${state}` : `${name}, ${country}`;
      dispatch(setLocation(locationName));
      dispatch(addCurrentLocationName(locationName));
    };

    if (
      (autoDetect && navigator.geolocation) ||
      !Object.keys(weatherData).length
    ) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        dispatch(setLat(latitude));
        dispatch(setLon(longitude));
        dispatch(addCurrentLocationLat(latitude));
        dispatch(addCurrentLocationLon(longitude));
        fetchData(latitude, longitude);
      });
    }
  }, [dispatch, autoDetect]);

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

  const styleComponents = () => {
    const icon = dynamicBackground
      ? weatherData.current?.weather[0]?.icon
      : 'default';

    dispatch(setBackgroundConfig(icon));
    dispatch(setBackgroundFilter(icon));
    dispatch(setDashboardStyle(icon));
  };

  useEffect(() => {
    styleComponents();
  }, [dispatch, weatherData, dynamicBackground]);

  useEffect(() => {
    showNavbar === true ? setNav('show') : setNav('hide');
  }, [showNavbar]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileNavbar = document.querySelector('.top-bar-container');
      if (mobileNavbar && !mobileNavbar.contains(event.target)) {
        dispatch(setShowNavbar(false));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className='main-container'>
      <div className='background-container' style={backgroundConfig}>
        <div className='background-filter' style={backgroundFilter}></div>
      </div>

      <div className={`navbar-container ${nav}`}>
        <Navbar />
      </div>

      <div className='page-container'>
        <div className='top-bar-container'>
          <SearchBar />

          <div
            className={`mobile-navbar-container ${nav}`}
            ref={mobileNavbarRef}
          >
            <Navbar />
          </div>

          {currentPage === 'dashboard' && <Statusbar />}
        </div>

        {currentPage === 'dashboard' && <Dashboards />}
        {currentPage === 'saved location' && <SavedLocation />}
        {currentPage === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;
