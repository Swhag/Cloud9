import React, { useState, useEffect } from 'react';
import { getIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/date';

function DailyForecast(props) {
  const { weatherData } = props;
  const daily = weatherData.daily;

  if (!Object.keys(weatherData).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='daily-forecast'>
      <ul>
        {daily.slice(1).map((item) => {
          const date = new Date(item.dt * 1000);
          const [weekday, monthDay] = formatDate(date);

          return (
            <li key={item.dt}>
              <span>{weekday}</span>
              <span> {monthDay}</span>
              <span> {Math.round(item.temp.day)}°F</span>
              <img src={getIcon(item.weather[0].icon)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DailyForecast;
