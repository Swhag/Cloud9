import React from 'react';
import { useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiWater } from '@mdi/js';
import { getIcon, getStaticIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/formatUtils';
import '../styles/dailyForecast.css';

function DailyForecast() {
  const { weatherData } = useSelector((state) => state.weather);
  const { dashboardStyle } = useSelector((state) => state.componentStyles);
  const { animatedIconsDaily } = useSelector((state) => state.settings);

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

              {animatedIconsDaily ? (
                <img src={getIcon(item.weather[0].icon)} />
              ) : (
                <img src={getStaticIcon(item.weather[0].icon)} />
              )}

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
                <Icon path={mdiWater} size={1} />
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
