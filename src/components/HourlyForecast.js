import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getIcon } from '../utils/weatherIcons';
import { getGeocodingUrl, getForecastUrl } from '../utils/weatherAPI';

const API_KEY = process.env.REACT_APP_API_KEY;
const LOCATION = 'New York';

function HourlyForecast() {
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const geocodingUrl = getGeocodingUrl(LOCATION, API_KEY);
      const geocodingResponse = await axios.get(geocodingUrl);
      const { lat, lon } = geocodingResponse.data[0];

      const forecastUrl = getForecastUrl(lat, lon, API_KEY);
      const forecastResponse = await axios.get(forecastUrl);
      setForecast(forecastResponse.data.hourly);
      console.log(forecastResponse.data.hourly);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Hourly Forecast for {LOCATION}</h2>
      <ul>
        {forecast.map((item) => {
          const date = new Date(item.dt * 1000);
          const options = { hour: 'numeric', hour12: true };
          const dateString = date.toLocaleTimeString(undefined, options);
          return (
            <li key={item.dt}>
              <span>{dateString}</span>
              <span> {Math.round(item.temp)}°F</span>
              <img src={getIcon(item.weather[0].icon)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HourlyForecast;
