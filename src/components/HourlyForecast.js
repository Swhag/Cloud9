import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { getIcon } from '../utils/weatherIcons';
import { formatTime } from '../utils/formatUtils';
import { groupHourlyForecastByDay } from '../utils/weatherUtils';
import Icon from '@mdi/react';
import { mdiWater } from '@mdi/js';
import '../styles/hourlyForecast.css';

function HourlyForecast() {
  const { weatherData } = useSelector((state) => state.weather);
  const { dashboardStyle } = useSelector((state) => state.componentStyles);
  const [groupedData, setGroupedData] = useState(null);

  useEffect(() => {
    if (weatherData && Object.keys(weatherData).length) {
      const grouped = groupHourlyForecastByDay(weatherData.hourly.slice(1));
      setGroupedData(grouped);
    }
  }, [weatherData]);

  if (!groupedData) {
    return (
      <div className='hourly-forecast' style={dashboardStyle}>
        <h3>HOURLY FORECAST - 48 HOURS</h3>
        <div className='loading-spinner'>
          Loading... <i className='fa fa-spinner fa-spin fa-lg'></i>
        </div>
      </div>
    );
  }

  return (
    <div className='hourly-forecast' style={dashboardStyle}>
      <h3>HOURLY FORECAST - 48 HOURS</h3>

      <div className='hourly-forecast-list'>
        {Object.keys(groupedData).map((day) => (
          <div key={day} className='hourly-day-block'>
            <h4>{day}</h4>
            <ScrollContainer
              className='hourly-scroll-container'
              hideScrollbars={false}
              vertical={false}
            >
              {groupedData[day].map((item) => (
                <li key={item.dt}>
                  <div className='hourly-block'>
                    <h5>{formatTime(item.dt)}</h5>
                  </div>

                  <img src={getIcon(item.weather[0].icon)} />

                  <div className='hourly-temp'>
                    <span className='hourly-temp-day'>
                      {Math.round(item.temp)}°
                    </span>
                  </div>

                  <div className='hourly-rain'>
                    <Icon path={mdiWater} size={0.8} />
                    <span>{Math.round(item.pop * 100)}%</span>
                  </div>
                </li>
              ))}
            </ScrollContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
