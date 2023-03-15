import React from 'react';
import Icon from '@mdi/react';
import {
  mdiWater,
  mdiWeatherWindy,
  mdiWeatherRainy,
  mdiCompass,
  mdiEye,
  mdiSpeedometer,
  mdiWeatherSunny,
  mdiWeatherSunsetUp,
  mdiWeatherSunset,
  mdiWeatherCloudy,
  mdiAirFilter,
} from '@mdi/js';

import {
  formatTime,
  metersToMiles,
  getWindDirection,
} from '../utils/formatUtils';

function CurrentDetails(props) {
  const { weatherData, backgroundColor } = props;

  const iconSize = 1.5;

  return (
    <div
      className='details-dashboard'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWater} size={iconSize} />
          <span>Humidity</span>
        </div>
        <span>{Math.round(weatherData.current.humidity)}%</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherRainy} size={iconSize} />
          <span>Precipitation</span>
        </div>

        <span>{Math.round(weatherData.daily[0].pop * 100)}%</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherWindy} size={iconSize} />
          <span>Wind Speed</span>
        </div>

        <span>{Math.round(weatherData.current.wind_speed)} mph</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiCompass} size={iconSize} />
          <span>Wind Direction</span>
        </div>
        <span>{getWindDirection(weatherData.current.wind_deg)}</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiEye} size={iconSize} />
          <span>Visibility</span>
        </div>
        <span>{metersToMiles(weatherData.current.visibility)} mi</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiSpeedometer} size={iconSize} />
          <span>Pressure</span>
        </div>
        <span>{weatherData.current.pressure} hPa</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherSunny} size={iconSize} />
          <span>UV Index</span>
        </div>
        <span>{weatherData.current.uvi}</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherSunsetUp} size={iconSize} />
          <span>Sunrise</span>
        </div>
        <span>{formatTime(weatherData.current.sunrise)}</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherSunset} size={iconSize} />
          <span>Sunset</span>
        </div>
        <span>{formatTime(weatherData.current.sunset)}</span>
      </div>

      <div className='details-block'>
        <div className='details-label'>
          <Icon path={mdiWeatherCloudy} size={iconSize} />
          <span>Cloud Cover</span>
        </div>
        <span>{Math.round(weatherData.current.clouds)}%</span>
      </div>
    </div>
  );
}

export default CurrentDetails;
