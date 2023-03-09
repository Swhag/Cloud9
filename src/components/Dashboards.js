import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import MainDashboard from './MainDashboard';
import SubDashboard from './SubDashboard';
import '../styles/dashboards.css';

function Dashboards(props) {
  const { weatherData, location, setLocation, setLat, setLon } = props;

  // console.log(weatherData);

  return (
    <div className='dashboard-container'>
      <SearchBar
        location={location}
        setLocation={setLocation}
        setLat={setLat}
        setLon={setLon}
      />

      <MainDashboard location={location} weatherData={weatherData} />

      <SubDashboard location={location} weatherData={weatherData} />

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
