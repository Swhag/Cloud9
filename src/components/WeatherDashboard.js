import React from 'react';
import '../styles/weatherDashboard.css';

function WeatherDashboard(props) {
  const { location, weatherData } = props;
  const current = weatherData.current;

  if (!current) {
    return <div>Loading...</div>;
  }

  // console.log(weatherData);

  return (
    <div className='weather-dashboard'>
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
            <i className='fa-solid fa-temperature-low'></i>
            <span>{Math.round(current.feels_like)}°F</span>
          </div>

          <div>
            <i className='fa-solid fa-droplet'></i>
            <span>{weatherData.daily[0].pop * 100}%</span>
          </div>

          <div>
            <i className='fa-solid fa-wind'></i>
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

export default WeatherDashboard;
