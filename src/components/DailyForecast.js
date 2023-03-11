import React, { useState, useEffect } from 'react';
import { getIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/formatUtils';
import '../styles/dailyForecast.css';

function DailyForecast(props) {
  const { weatherData } = props;
  const daily = weatherData.daily;

  if (!Object.keys(weatherData).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='daily-forecast'>
      <h3>7-DAY FORECAST</h3>
      <ul>
        {daily.slice(1).map((item) => {
          const date = new Date(item.dt * 1000);
          const [weekday, monthDay] = formatDate(date);

          return (
            <li key={item.dt}>
              <div className='daily-block'>
                <h4>{weekday}</h4>
                <p> {monthDay}</p>
              </div>

              <img src={getIcon(item.weather[0].icon)} />

              <div className='daily-temp'>
                <span className='daily-temp-day'>
                  {Math.round(item.temp.day)}°
                </span>
                <span>/</span>
                <span className='daily-temp-min'>
                  {Math.round(item.temp.min)}°
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DailyForecast;
