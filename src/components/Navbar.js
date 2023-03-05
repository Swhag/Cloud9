import React from 'react';
import '../styles/navbar.css';
import logo from '../icons/logo.png';

import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHeartCircleOutline,
  mdiCogOutline,
} from '@mdi/js';

function Navbar(props) {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img src={logo}></img>
        <h2>Cloud9</h2>
      </div>

      <ul className='navbar-list'>
        <li>
          <Icon path={mdiViewDashboard} size={1.3} className='navbar-icon' />
          <span>Dashboard</span>
        </li>
        <li>
          <Icon
            path={mdiHeartCircleOutline}
            size={1.3}
            className='navbar-icon'
          />
          <span>SavedLocation</span>
        </li>
        <li>
          <Icon path={mdiCogOutline} size={1.3} className='navbar-icon' />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
