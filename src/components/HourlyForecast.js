import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getIcon } from '../utils/weatherIcons';
import { formatDate, formatTime } from '../utils/formatUtils';
import '../styles/hourlyForecast.css';

import ScrollContainer from 'react-indiana-drag-scroll';

function groupHourlyForecastByDay(hourlyForecast) {
  const days = {};

  // Loop through the hourly forecast data
  for (let i = 0; i < hourlyForecast.length; i++) {
    const forecast = hourlyForecast[i];

    // Get the day of the forecast
    const day = new Date(forecast.dt * 1000).toLocaleDateString();
    const date = new Date(forecast.dt * 1000);
    const [weekday, monthDay] = formatDate(date);

    // If the day is not in the days object, add it
    if (!days[monthDay]) {
      days[monthDay] = [];
    }

    // Add the forecast to the corresponding day
    days[monthDay].push(forecast);
  }

  return days;
}

function HourlyForecast(props) {
  const { weatherData, dashboardStyle } = props;
  const [groupedData, setGroupedData] = useState(null);

  useEffect(() => {
    if (weatherData && Object.keys(weatherData).length) {
      const grouped = groupHourlyForecastByDay(weatherData.hourly.slice(1));
      setGroupedData(grouped);
    }
  }, [weatherData]);

  if (!groupedData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='hourly-forecast-container' style={dashboardStyle}>
      <h3>HOURLY FORECAST - 48 HOURS</h3>

      <div className='hourly-forecast'>
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
