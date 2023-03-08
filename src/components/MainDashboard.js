import React from 'react';
import Icon from '@mdi/react';
import { mdiThermometerLow, mdiWater, mdiWeatherWindy } from '@mdi/js';

function MainDashboard(props) {
  const { location, weatherData } = props;
  const current = weatherData.current;

  if (!current) {
    return <div>Loading...</div>;
  }

  // console.log(weatherData);

  return (
    <div className='main-dashboard'>
      <div className='dashboard-content'>
        <div className='dashboard-location'>
          <i className='fa-solid fa-location-dot'></i>
          <span>{location}</span>
        </div>

        <div className='dashboard-temp'>
          <h1>{Math.round(current.temp)}°</h1>
          <span>{current.weather[0].description}</span>
        </div>

        <div className='dashboard-bottom'>
          <div>
            <Icon path={mdiThermometerLow} size={1} />
            <span>{Math.round(current.feels_like)}°F</span>
          </div>

          <div>
            <Icon path={mdiWater} size={1} />
            <span>{Math.round(weatherData.daily[0].pop * 100)}%</span>
          </div>

          <div>
            <Icon path={mdiWeatherWindy} size={1} />
            <span>{Math.round(current.wind_speed)} mph</span>
          </div>
        </div>
      </div>

      <WeatherChart />
    </div>
  );
}

function WeatherChart() {
  return <div className='weather-chart-container'>Temperature</div>;
}

export default MainDashboard;
