import React, { useState, useEffect } from 'react';
import { getGeocodingData, getWeatherData } from '../utils/weatherApi';
import { getIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/date';

function useWeatherData(location) {
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { lat, lon } = await getGeocodingData(location);
      setLat(lat);
      setLon(lon);
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (lat && lon) {
        const forecastData = await getWeatherData(lat, lon);
        setForecast(forecastData);
      }
    };

    fetchData();
  }, [lat, lon]);

  return forecast;
}

function WeeklyForecast() {
  const LOCATION = 'New York';
  const forecast = useWeatherData(LOCATION);

  return (
    <div>
      <ul>
        {forecast.slice(1).map((item) => {
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

export default WeeklyForecast;
