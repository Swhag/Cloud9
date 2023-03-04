import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Weather from './components/Weather';
import WeeklyForecast from './components/WeeklyForecast';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <div className='weather-container'>
        <Weather />
        <WeeklyForecast />
      </div>
    </div>
  );
}

export default App;
