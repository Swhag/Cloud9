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

import { formatTime } from '../utils/formatUtils';
import { getWindDirection } from '../utils/weatherUtils';

function SubDashboard(props) {
  const { location, weatherData } = props;
  const current = weatherData.current;

  if (!current) {
    return <div>Loading...</div>;
  }

  const sunrise = formatTime(weatherData.current.sunrise);
  const sunset = formatTime(weatherData.current.sunset);

  return (
    <div className='sub-dashboard'>
      <div>
        <Icon path={mdiWater} size={1} />
        <span>Humidity</span>
        <span>{Math.round(current.humidity)}%</span>
      </div>

      <div>
        <Icon path={mdiWeatherRainy} size={1} />
        <span>Precipitation</span>
        <span>{Math.round(weatherData.daily[0].pop * 100)}%</span>
      </div>

      <div>
        <Icon path={mdiWeatherWindy} size={1} />
        <span>Wind Speed</span>
        <span>{Math.round(current.wind_speed)} mph</span>
      </div>

      <div>
        <Icon path={mdiCompass} size={1} />
        <span>Wind Direction</span>
        <span>{getWindDirection(current.wind_deg)}</span>
      </div>

      <div>
        <Icon path={mdiEye} size={1} />
        <span>Visibility</span>
        <span>{current.visibility} mi</span>
      </div>

      <div>
        <Icon path={mdiSpeedometer} size={1} />
        <span>Pressure</span>
        <span>{current.pressure} hPa</span>
      </div>

      <div>
        <Icon path={mdiWeatherSunny} size={1} />
        <span>UV Index</span>
        <span>{current.uvi}</span>
      </div>

      <div>
        <Icon path={mdiWeatherSunsetUp} size={1} />
        <span>Sunrise</span>
        <span>{sunrise}</span>
      </div>

      <div>
        <Icon path={mdiWeatherSunset} size={1} />
        <span>Sunset</span>
        <span>{sunset}</span>
      </div>

      <div>
        <Icon path={mdiWeatherCloudy} size={1} />
        <span>Cloud Cover</span>
        <span>{Math.round(current.clouds)}%</span>
      </div>
    </div>
  );
}

export default SubDashboard;
