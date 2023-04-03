import React, { useState, useEffect } from 'react';
import CurrentWeather from '../components/currentWeather/CurrentWeather';
import CurrentDetails from '../components/currentWeather/CurrentDetails';
import WeatherChart from '../components/currentWeather/WeatherChart';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import '../styles/dashboards.css';

function Dashboards() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMounted2, setIsMounted2] = useState(false);
  const [isMounted3, setIsMounted3] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout2 = setTimeout(() => {
      setIsMounted2(true);
    }, 300);
    const timeout3 = setTimeout(() => {
      setIsMounted3(true);
    }, 600);

    return () => {
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className='dashboard-container'>
      <div
        className={`current-dashboard-container ${isMounted ? 'fade-in' : ''}`}
      >
        <div className='current-dashboard-group'>
          <CurrentWeather />
          <CurrentDetails />
        </div>
        <WeatherChart />
      </div>

      <div className='forecast-container'>
        <div
          className={`daily-forecast-container ${isMounted2 ? 'fade-in' : ''}`}
        >
          <DailyForecast />
        </div>
        <div
          className={`hourly-forecast-container ${isMounted3 ? 'fade-in' : ''}`}
        >
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
