import React from 'react';

import { getIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/formatUtils';
import Icon from '@mdi/react';
import { mdiWater, mdiWeatherRainy } from '@mdi/js';
import '../styles/dailyForecast.css';

function DailyForecast(props) {
  const { weatherData, dashboardStyle } = props;

  if (!Object.keys(weatherData).length) {
    return (
      <div className='daily-forecast' style={dashboardStyle}>
        <h3>DAILY FORECAST - 7 DAYS</h3>
        <div className='loading-spinner'>
          Loading... <i className='fa fa-spinner fa-spin fa-lg'></i>
        </div>
      </div>
    );
  }

  return (
    <div className='daily-forecast' style={dashboardStyle}>
      <h3>DAILY FORECAST - 7 DAYS</h3>
      <ul>
        {weatherData.daily.slice(1).map((item) => {
          const date = new Date(item.dt * 1000);
          const [weekday, monthDay] = formatDate(date);

          return (
            <li key={item.dt}>
              <div className='daily-block'>
                <h4>{weekday.substring(0, 3)}</h4>
                <p> {monthDay}</p>
              </div>

              <img src={getIcon(item.weather[0].icon)} />

              <div className='daily-temp'>
                <div className='daily-temp-day'>
                  {Math.round(item.temp.day)}°
                </div>
                <div className='daily-temp-feels'>
                  <span>Feels:</span>
                  {Math.round(item.feels_like.day)}°
                </div>
              </div>

              <div className='daily-rain'>
                <Icon path={mdiWater} size={1.2} />
                <span>{Math.round(item.pop * 100)}%</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DailyForecast;
