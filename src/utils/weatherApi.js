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

// const buildGeocodingUrl = (location) => {
//   return `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY1}`;
// };

// export const getGeocodingData = async (location) => {
//   const geocodingUrl = buildGeocodingUrl(location);
//   const geocodingResponse = await axios.get(geocodingUrl);
//   return geocodingResponse.data[0];
// };

const buildWeatherUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${API_KEY}`;
};

export const getWeatherData = async (lat, lon) => {
  const weatherUrl = buildWeatherUrl(lat, lon);
  const weatherResponse = await axios.get(weatherUrl);
  return weatherResponse.data;
};
