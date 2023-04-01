import React from 'react';
import { useSelector } from 'react-redux';
import { getIcon } from '../../utils/weatherIcons';
import { capitalize, formatTime } from '../../utils/formatUtils';
import { IoLocationSharp } from 'react-icons/io5';

function CurrentWeather() {
  const { weatherData, location } = useSelector((state) => state.weather);
  const { dashboardStyle } = useSelector((state) => state.componentStyles);

  if (!Object.keys(weatherData).length) {
    return (
      <div className='current-weather' style={dashboardStyle}>
        <div className='loading-spinner'>
          Loading... <i className='fa fa-spinner fa-spin fa-lg'></i>
        </div>
      </div>
    );
  }

  return (
    <div className='current-weather' style={dashboardStyle}>
      <div className='current-info'>
        <div className='current-location'>
          <IoLocationSharp size={20} />
          {location}
        </div>

        <span>Updated: {formatTime(weatherData.current.dt)}</span>
      </div>

      <div className='current-temp'>
        <img src={getIcon(weatherData.current.weather[0].icon)} />
        <h1>{Math.round(weatherData.current.temp)}°</h1>
        <span>{capitalize(weatherData.current.weather[0].description)}</span>
      </div>

      <div className='current-details'>
        <div>
          <span>H:{Math.round(weatherData.daily[0].temp.max)}°</span>
          <span className='divider'>/</span>
          <span>L:{Math.round(weatherData.daily[0].temp.min)}°</span>
        </div>
        <span>Feels like {Math.round(weatherData.current.feels_like)}°</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
