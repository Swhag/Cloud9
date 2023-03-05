import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDashboard from './WeatherDashboard';

function Dashboards(props) {
  const { weatherData, location, setLocation } = props;

  console.log(weatherData);

  return (
    <div className='dashboard-container'>
      <SearchBar location={location} setLocation={setLocation} />

      <WeatherDashboard location={location} weatherData={weatherData} />

      {/* <div>
        <div>wind</div>
        <div>rain chance</div>
        <div>wind</div>
        <div>wind</div>
      </div> */}
    </div>
  );
}

export default Dashboards;
