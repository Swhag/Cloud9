import React from 'react';
import { getImage } from '../utils/weatherImages';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import CurrentDetails from './CurrentDetails';
import WeatherChart from './WeatherChart';

let fontColor = '#fff';
let backgroundColor = 'rgba(0, 0, 0, 0.2)';

function CurrentDashboard(props) {
  const { weatherData, location, setLocation, setLat, setLon } = props;

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
      <div className='search-bar-container-mobile'>
        <SearchBar
          location={location}
          setLocation={setLocation}
          setLat={setLat}
          setLon={setLon}
        />
      </div>

      <div className='current-dashboard-group'>
        <CurrentWeather
          location={location}
          weatherData={weatherData}
          backgroundColor={backgroundColor}
        />
        <CurrentDetails
          weatherData={weatherData}
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

export default CurrentDashboard;
