import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY1 = process.env.REACT_APP_API_KEY1;

const buildLocationUrl = (location) => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=10&appid=${API_KEY1}`;
};

export const getLocationData = async (location) => {
  const LocationUrl = buildLocationUrl(location);
  const LocationResponse = await axios.get(LocationUrl);
  return LocationResponse.data;
};

const buildWeatherUrl = (lat, lon, unit) => {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=${API_KEY}`;
};

export const getWeatherData = async (lat, lon, unit) => {
  const weatherUrl = buildWeatherUrl(lat, lon, unit);
  const weatherResponse = await axios.get(weatherUrl);
  return weatherResponse.data;
};
