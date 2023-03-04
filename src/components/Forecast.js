import React, { useState, useEffect } from 'react';
import axios from 'axios';

import w01d from '../icons/01d.svg';
import w01n from '../icons/01n.svg';
import w02d from '../icons/02d.svg';
import w02n from '../icons/02n.svg';
import w03d from '../icons/03d.svg';
import w03n from '../icons/03n.svg';
import w04d from '../icons/04d.svg';
import w04n from '../icons/04n.svg';
import w09d from '../icons/09d.svg';
import w09n from '../icons/09n.svg';
import w10d from '../icons/10d.svg';
import w10n from '../icons/10n.svg';
import w11d from '../icons/11d.svg';
import w11n from '../icons/11n.svg';
import w13d from '../icons/13d.svg';
import w13n from '../icons/13n.svg';
import w50d from '../icons/50d.svg';
import w50n from '../icons/50n.svg';

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

  const getIcon = (code) => {
    switch (code) {
      case '01d':
        return w01d;
      case '01n':
        return w01n;
      case '02d':
        return w02d;
      case '02n':
        return w02n;
      case '03d':
        return w03d;
      case '03n':
        return w03n;
      case '04d':
        return w04d;
      case '04n':
        return w04n;
      case '09d':
        return w09d;
      case '09n':
        return w09n;
      case '10d':
        return w10d;
      case '10n':
        return w10n;
      case '11d':
        return w11d;
      case '11n':
        return w11n;
      case '13d':
        return w13d;
      case '13n':
        return w13n;
      case '50d':
        return w50d;
      case '50n':
        return w50n;
      default:
        return null; // or return a default icon if the code is not recognized
    }
  };

  return (
    <div>
      <h2>7-day Forecast for {LOCATION}</h2>
      <ul>
        {forecast.map((item) => (
          <li key={item.dt}>
            {/* <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            /> */}
            <img
              src={getIcon(item.weather[0].icon)}
              alt={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            ></img>
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
