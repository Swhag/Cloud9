import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

import logo from '../assets/icons/logo.png';
import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHeartCircleOutline,
  mdiCogOutline,
} from '@mdi/js';

function Navbar(props) {
  const { showNavbar } = props;
  const [nav, setNav] = useState('show');

  useEffect(() => {
    showNavbar === true ? setNav('show') : setNav('hide');
  }, [showNavbar]);

  return (
    <div className={`navbar-container ${nav}`}>
      <div className='logo'>
        <span>
          <img src={logo}></img> Cloud9
        </span>
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
          <span>Saved Location</span>
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
