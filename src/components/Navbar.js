import React from 'react';
import '../styles/navbar.css';

function Navbar(props) {
  return (
    <div className='navbar-container'>
      <h2>Cloud9</h2>
      <div className='navbar-list'>
        <ul>
          <li>Dashboard</li>
          <li>SavedLocation</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
