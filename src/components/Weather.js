import React from 'react';
import '../styles/navbar.css';
import cloudy from '../icons/50n.svg';
// import { ReactComponent as Cloudy } from '../icons/cloudy.svg';

function Weather(props) {
  return (
    <div className='weather-today'>
      <div>search bar</div>
      <div>main-weather</div>
      <div>
        <div>wind</div>
        <div>rain chance</div>
        <div>wind</div>
        <div>wind</div>
      </div>
      <div>WeatherIcon</div>
      <img src={cloudy}></img>
    </div>
  );
}

export default Weather;
