import { useState, useEffect } from 'react';
import { getGeocodingData, getWeatherData } from './weatherAPI';

// custom react hook that returns weatherData
function useWeatherData(location) {
  const [weatherData, setWeatherData] = useState([]);

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
        const weatherData = await getWeatherData(lat, lon);
        setWeatherData(weatherData);
      }
    };

    fetchData();
  }, [lat, lon]);

  // console.log(weatherData);
  return weatherData;
}

export default useWeatherData;
