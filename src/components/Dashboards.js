import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBackground } from '../redux/dashboardSlice';

import SearchBar from './SearchBar';
import Navbar from './Navbar';

import CurrentDashboard from './CurrentDashboard';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

import '../styles/dashboards.css';

function Dashboards(props) {
  const {
    weatherData,
    location,
    setLocation,
    setLat,
    setLon,
    showNavbar,
    setShowNavbar,
  } = props;
  const dispatch = useDispatch();
  const [nav, setNav] = useState('show');

  useEffect(() => {
    showNavbar === true ? setNav('show') : setNav('hide');
  }, [showNavbar]);

  useEffect(() => {
    if (weatherData.current.weather) {
      dispatch(setBackground(weatherData.current.weather[0].icon));
    }
  }, [weatherData, dispatch]);

  return (
    <div className='dashboard-container'>
      <div className='search-bar-container'>
        <SearchBar
          location={location}
          setLocation={setLocation}
          setLat={setLat}
          setLon={setLon}
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />

        <div className={`mobile-navbar-container ${nav}`}>
          <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        </div>
      </div>

      <CurrentDashboard
        weatherData={weatherData}
        location={location}
        setLocation={setLocation}
        setLat={setLat}
        setLon={setLon}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />

      <DailyForecast
        weatherData={weatherData}
        location={location}
        setLocation={setLocation}
      />

      <HourlyForecast location={location} weatherData={weatherData} />
    </div>
  );
}

export default Dashboards;
