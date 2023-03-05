import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
