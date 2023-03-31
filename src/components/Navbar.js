import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowNavbar, setCurrentPage } from '../redux/componentStylesSlice';

import '../styles/navbar.css';

import logo from '../assets/icons/logo.png';
import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHeartCircleOutline,
  mdiCogOutline,
} from '@mdi/js';

function Navbar() {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(setShowNavbar(false));
  };

  return (
    <>
      <div className='logo'>
        <span>
          <img src={logo}></img> Cloud9
        </span>
      </div>

      <ul className='navbar-list'>
        <li
          onClick={() => {
            dispatch(setCurrentPage('dashboard'));
            handleSelect();
          }}
        >
          <Icon path={mdiViewDashboard} size={1.3} className='navbar-icon' />
          <span>Dashboards</span>
        </li>

        <li
          onClick={() => {
            dispatch(setCurrentPage('saved location'));
            handleSelect();
          }}
        >
          <Icon
            path={mdiHeartCircleOutline}
            size={1.3}
            className='navbar-icon'
          />
          <span>Saved Location</span>
        </li>

        <li
          onClick={() => {
            dispatch(setCurrentPage('settings'));
            handleSelect();
          }}
        >
          <Icon path={mdiCogOutline} size={1.3} className='navbar-icon' />
          <span>Settings</span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
