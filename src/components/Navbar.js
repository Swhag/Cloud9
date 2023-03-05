import React from 'react';
import '../styles/navbar.css';

import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHeartCircleOutline,
  mdiCogOutline,
  mdiThermometerCheck,
} from '@mdi/js';

function Navbar(props) {
  return (
    <div className='navbar-container'>
      <Icon path={mdiThermometerCheck} size={1} />

      <h2>Cloud9</h2>
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
