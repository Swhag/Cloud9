import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <div className='weather-container'>
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
