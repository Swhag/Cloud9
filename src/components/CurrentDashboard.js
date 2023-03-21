import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CurrentWeather from './CurrentWeather';
import CurrentDetails from './CurrentDetails';
import WeatherChart from './WeatherChart';

function CurrentDashboard(props) {
  const { weatherData, location } = props;
  const dashboardStyle = useSelector((state) => state.dashboard.dashboardStyle);

  if (!Object.keys(weatherData).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='current-dashboard-container'>
      <div className='current-dashboard-group'>
        <CurrentWeather
          location={location}
          weatherData={weatherData}
          dashboardStyle={dashboardStyle}
        />
        <CurrentDetails
          weatherData={weatherData}
          dashboardStyle={dashboardStyle}
        />
      </div>
      <WeatherChart weatherData={weatherData} dashboardStyle={dashboardStyle} />
    </div>
  );
}
export default CurrentDashboard;
