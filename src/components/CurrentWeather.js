import React from 'react';
import { getIcon } from '../utils/weatherIcons';
import { capitalize, formatTime } from '../utils/formatUtils';

function CurrentWeather(props) {
  const { location, weatherData, dashboardStyle } = props;

  return (
    <div className='current-weather' style={dashboardStyle}>
      <div className='current-info'>
        <span>
          <i className='fa-solid fa-location-dot'></i>
          {location}
        </span>

        <span>Updated: {formatTime(weatherData.current.dt)}</span>
      </div>

      <div className='current-temp'>
        <img src={getIcon(weatherData.current.weather[0].icon)} />
        <h1>{Math.round(weatherData.current.temp)}°</h1>
        <span>{capitalize(weatherData.current.weather[0].description)}</span>
      </div>

      <div className='current-details'>
        <div>
          <span>H:{Math.round(weatherData.daily[0].temp.max)}°</span>
          <span className='divider'>/</span>
          <span>L:{Math.round(weatherData.daily[0].temp.min)}°</span>
        </div>
        <span>Feels like {Math.round(weatherData.current.feels_like)}°</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
