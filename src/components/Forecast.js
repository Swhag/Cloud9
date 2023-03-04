import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const LOCATION = 'New York';

function Forecast() {
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${LOCATION}&limit=1&appid=${API_KEY}`;
      const geocodingResponse = await axios.get(geocodingUrl);
      const { lat, lon } = geocodingResponse.data[0];

      const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${API_KEY}`;
      const forecastResponse = await axios.get(forecastUrl);
      setForecast(forecastResponse.data.daily);
      console.log(forecastResponse.data.daily);
    };

    fetchData();
  }, []);

  const getIconClass = (code) => {
    // your existing code for mapping weather codes to icon classes
  };

  return (
    <div>
      <h2>7-day Forecast for {LOCATION}</h2>
      <ul>
        {forecast.map((item) => (
          <li key={item.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <strong>{new Date(item.dt * 1000).toLocaleDateString()}</strong>:{' '}
            {item.weather[0].description}, High: {item.temp.max}°F, Low:{' '}
            {item.temp.min}°F
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
