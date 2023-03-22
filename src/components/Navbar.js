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
  return (
    <>
      <div className='logo'>
        <span>
          <img src={logo}></img> Cloud9
        </span>
      </div>

      <ul className='navbar-list'>
        <li>
          <Icon path={mdiViewDashboard} size={1.3} className='navbar-icon' />
          <span>Dashboards</span>
        </li>

        <li>
          <Icon
            path={mdiHeartCircleOutline}
            size={1.3}
            className='navbar-icon'
          />
          <span>Saved Location</span>
        </li>

        <li>
          <Icon path={mdiCogOutline} size={1.3} className='navbar-icon' />
          <span>Settings</span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
