import React, { useState, useEffect } from 'react';
import { getIcon } from '../utils/weatherIcons';
import { formatDate, formatTime } from '../utils/formatUtils';

function HourlyForecast(props) {
  const { weatherData } = props;
  const hourly = weatherData.hourly;
  const daily = weatherData.daily;

  if (!Object.keys(weatherData).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='daily-forecast'>
      <h3>HOURLY FORECAST</h3>
      <ul>
        {hourly.slice(1).map((item) => {
          return (
            <li key={item.dt}>
              <div className='daily-block'>
                <h4>{formatTime(item.dt)}</h4>
              </div>

              <img src={getIcon(item.weather[0].icon)} />

              <div className='daily-temp'>
                <span className='daily-temp-day'>{Math.round(item.temp)}°</span>
                <span>/</span>
                <span className='daily-temp-min'>
                  {Math.round(item.feels_like)}°
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HourlyForecast;
