import React from 'react';

import CurrentWeather from '../components/currentWeather/CurrentWeather';
import CurrentDetails from '../components/currentWeather/CurrentDetails';
import WeatherChart from '../components/currentWeather/WeatherChart';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';

import '../styles/dashboards.css';

function Dashboards(props) {
  const { weatherData, location, setLocation, dashboardStyle } = props;

  return (
    <div className='dashboard-container'>
      <div className='current-dashboard-container'>
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
        <DailyForecast
          weatherData={weatherData}
          location={location}
          setLocation={setLocation}
          dashboardStyle={dashboardStyle}
        />

        <HourlyForecast
          location={location}
          weatherData={weatherData}
          dashboardStyle={dashboardStyle}
        />
      </div>
    </div>
  );
}

export default Dashboards;
