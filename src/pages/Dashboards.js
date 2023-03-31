import React, { useState, useEffect } from 'react';

import CurrentWeather from '../components/currentWeather/CurrentWeather';
import CurrentDetails from '../components/currentWeather/CurrentDetails';
import WeatherChart from '../components/currentWeather/WeatherChart';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';

import '../styles/dashboards.css';

function Dashboards(props) {
  const { weatherData, location, setLocation, dashboardStyle } = props;
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
          <CurrentWeather
            location={location}
            weatherData={weatherData}
            dashboardStyle={dashboardStyle}
          />
          <CurrentDetails
            weatherData={weatherData}
            dashboardStyle={dashboardStyle}
          />
        </div>
        <WeatherChart
          weatherData={weatherData}
          dashboardStyle={dashboardStyle}
        />
      </div>

      <div className='forecast-container'>
        <div
          className={`daily-forecast-container ${isMounted2 ? 'fade-in' : ''}`}
        >
          <DailyForecast
            weatherData={weatherData}
            location={location}
            setLocation={setLocation}
            dashboardStyle={dashboardStyle}
          />
        </div>
        <div
          className={`hourly-forecast-container ${isMounted3 ? 'fade-in' : ''}`}
        >
          <HourlyForecast
            location={location}
            weatherData={weatherData}
            dashboardStyle={dashboardStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
