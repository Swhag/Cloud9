import React, { useState, useEffect } from 'react';
import { getIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/date';
import useWeatherData from '../utils/useWeatherData';

function DailyForecast() {
  const [location, setLocation] = useState('New York');
  const forecast = useWeatherData(location);

  if (!Object.keys(forecast).length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {forecast.daily.slice(1).map((item) => {
          const date = new Date(item.dt * 1000);
          const [weekday, monthDay] = formatDate(date);

          return (
            <li key={item.dt}>
              <span>{weekday}</span>
              <span> {monthDay}</span>
              <span> {Math.round(item.temp.day)}°F</span>
              <img src={getIcon(item.weather[0].icon)} alt='weather icon' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DailyForecast;
