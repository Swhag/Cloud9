import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getGeocodingData = async (location) => {
  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;
  const geocodingResponse = await axios.get(geocodingUrl);
  return geocodingResponse.data[0];
};

export const getWeatherData = async (lat, lon) => {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${API_KEY}`;
  const forecastResponse = await axios.get(forecastUrl);
  return forecastResponse.data.daily;
};
