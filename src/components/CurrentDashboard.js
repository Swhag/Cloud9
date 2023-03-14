import React from 'react';
import Icon from '@mdi/react';
import { mdiThermometerLow, mdiWater, mdiWeatherWindy } from '@mdi/js';
import { getIcon } from '../utils/weatherIcons';
import { capitalize } from '../utils/formatUtils';
import { getImage } from '../utils/weatherImages';
import WeatherChart from './WeatherChart';
import CurrentDetails from './CurrentDetails';

let fontColor = '#fff';
let backgroundColor = 'rgba(0, 0, 0, 0.2)';

function CurrentDashboard(props) {
  const { location, weatherData } = props;

  if (!weatherData || !weatherData.current) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    backgroundImage: `url(${getImage(weatherData.current.weather[0].icon)})`,
    backgroundSize: 'cover',
    color: fontColor,
  };

  return (
    <div className='current-dashboard-container' style={containerStyle}>
      <div className='current-dashboard-group'>
        <CurrentWeather location={location} weatherData={weatherData} />

        <CurrentDetails
          weatherData={weatherData}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
        />
      </div>

      <WeatherChart
        weatherData={weatherData}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

function CurrentWeather(props) {
  const { location, weatherData } = props;

  return (
    <div
      className='current-dashboard'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='current-location'>
        <i className='fa-solid fa-location-dot'></i>
        <span>{location}</span>
      </div>

      <div className='current-weather'>
        <img src={getIcon(weatherData.current.weather[0].icon)} />
        <h1>{Math.round(weatherData.current.temp)}°</h1>
        <span>{capitalize(weatherData.current.weather[0].description)}</span>
      </div>

      <div className='current-details'>
        <div>
          <span>high:{Math.round(weatherData.daily[0].temp.max)}°</span>
          <span className='divider'>/</span>
          <span>low:{Math.round(weatherData.daily[0].temp.min)}°</span>
        </div>
        <span>Feels like {Math.round(weatherData.current.feels_like)}°</span>
      </div>
    </div>
  );
}

export default CurrentDashboard;
