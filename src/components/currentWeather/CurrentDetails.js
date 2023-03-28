import React from 'react';
import { useSelector } from 'react-redux';

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
} from '@mdi/js';

import { WiMoonrise, WiMoonset } from 'react-icons/wi';

import {
  formatTime,
  metersToMiles,
  getWindDirection,
} from '../../utils/formatUtils';

function CurrentDetails(props) {
  const { weatherData, dashboardStyle } = props;
  const { unit } = useSelector((state) => state.settings);

  const iconSize = 1.5;

  if (!Object.keys(weatherData).length) {
    return (
      <div className='details-dashboard'>
        <div className='details-group' style={dashboardStyle}></div>
      </div>
    );
  }

  const speedUnit = unit === 'imperial' ? 'mph' : 'km/h';

  console.log(weatherData.daily[1]);

  return (
    <div className='details-dashboard'>
      <div className='details-group' style={dashboardStyle}>
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
            <Icon path={mdiWeatherCloudy} size={iconSize} />
            <span>Cloud Cover</span>
          </div>
          <span>{Math.round(weatherData.current.clouds)}%</span>
        </div>

        <div className='details-block'>
          <div className='details-label'>
            <Icon path={mdiEye} size={iconSize} />
            <span>Visibility</span>
          </div>
          <span>{metersToMiles(weatherData.current.visibility)} mi</span>
        </div>
      </div>

      <div className='details-group' style={dashboardStyle}>
        <div className='details-block'>
          <div className='details-label'>
            <Icon path={mdiWeatherWindy} size={iconSize} />
            <span>Wind Speed</span>
          </div>

          <span>
            {Math.round(weatherData.current.wind_speed)} {speedUnit}
          </span>
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
      </div>

      <div className='details-group' style={dashboardStyle}>
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
            <WiMoonrise
              size={44}
              style={{
                margin: -8,
              }}
            />
            <span>Moonrise</span>
          </div>
          <span>{formatTime(weatherData.daily[0].moonrise)}</span>
        </div>
        <div className='details-block'>
          <div className='details-label'>
            <WiMoonset
              size={44}
              style={{
                margin: -8,
              }}
            />
            <span>Moonset</span>
          </div>
          <span>{formatTime(weatherData.daily[0].moonset)}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrentDetails;
