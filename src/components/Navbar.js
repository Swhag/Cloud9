import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

import logo from '../assets/icons/logo.png';
import Icon from '@mdi/react';
import {
  mdiClose,
  mdiMenu,
  mdiViewDashboard,
  mdiHeartCircleOutline,
  mdiCogOutline,
} from '@mdi/js';

function Navbar(props) {
  const { setCurrentPage } = props;

  return (
    <>
      <div className='logo'>
        <span>
          <img src={logo}></img> Cloud9
        </span>
      </div>

      <ul className='navbar-list'>
        <li onClick={() => setCurrentPage('dashboard')}>
          <Icon path={mdiViewDashboard} size={1.3} className='navbar-icon' />
          <span>Dashboards</span>
        </li>

        <li onClick={() => setCurrentPage('saved location')}>
          <Icon
            path={mdiHeartCircleOutline}
            size={1.3}
            className='navbar-icon'
          />
          <span>Saved Location</span>
        </li>

        <li onClick={() => setCurrentPage('settings')}>
          <Icon path={mdiCogOutline} size={1.3} className='navbar-icon' />
          <span>Settings</span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
