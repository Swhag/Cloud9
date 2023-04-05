import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleAutoSync,
  setSyncFrequency,
  setUnit,
  toggleDynamicBackground,
  toggleAnimatedIconsDaily,
  toggleAnimatedIconsHourly,
} from '../redux/settingSlice';
import '../styles/settings.css';

function Settings() {
  const { dashboardStyle } = useSelector((state) => state.componentStyles);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`settings-container ${isMounted ? 'fade-in' : ''}`}
      style={dashboardStyle}
    >
      <SynchronizationSetting />
      <UnitsSetting />
      <BackgroundSetting />
      <IconsSetting />
    </div>
  );
}

function SynchronizationSetting() {
  const dispatch = useDispatch();
  const { autoSync, syncFrequency } = useSelector((state) => state.settings);

  const handleAutoSyncToggle = () => {
    dispatch(toggleAutoSync());
  };

  const handleSyncFrequencyChange = (event) => {
    dispatch(setSyncFrequency(event.target.value));
  };

  return (
    <div className='settings-group'>
      <h2>Synchronization</h2>
      <li>
        <h4>Sync automatically</h4>
        <label className='toggle'>
          <input
            className='toggle-input'
            type='checkbox'
            checked={autoSync}
            onChange={handleAutoSyncToggle}
          />
          <div className='toggle-fill switch-color'>
            <span className='toggle-option'>On</span>
            <span className='toggle-option'>Off</span>
          </div>
        </label>
      </li>

      <li>
        <h4>Frequency</h4>

        <div className={`sync-radio-group ${autoSync ? 'fade-in' : ''}`}>
          <label className='radio'>
            <input
              type='radio'
              value='30'
              checked={syncFrequency === '30'}
              onChange={handleSyncFrequencyChange}
            />
            <span className='radio-label'>30 min</span>
          </label>
          <label className='radio'>
            <input
              type='radio'
              value='60'
              checked={syncFrequency === '60'}
              onChange={handleSyncFrequencyChange}
            />
            <span className='radio-label'>60 min</span>
          </label>
          <label className='radio'>
            <input
              type='radio'
              value='120'
              checked={syncFrequency === '120'}
              onChange={handleSyncFrequencyChange}
            />
            <span className='radio-label'>120 min</span>
          </label>
        </div>
      </li>
    </div>
  );
}

function UnitsSetting() {
  const dispatch = useDispatch();
  const { unit } = useSelector((state) => state.settings);

  const speedUnits = unit === 'metric' ? 'km/h' : 'mph';
  const temperatureUnits = unit === 'metric' ? '°C' : '°F';

  const handleUnitChange = (event) => {
    dispatch(setUnit(event.target.value));
  };

  return (
    <div className='settings-group'>
      <h2>Units</h2>

      <li>
        <h4>Temperature: {temperatureUnits}</h4>
      </li>

      <li>
        <h4>Speed: {speedUnits}</h4>
        <div className='unit-radio-group'>
          <label className='radio'>
            <input
              type='radio'
              value='imperial'
              checked={unit === 'imperial'}
              onChange={handleUnitChange}
            />
            <span className='radio-label'>Imperial</span>
          </label>
          <label className='radio'>
            <input
              type='radio'
              value='metric'
              checked={unit === 'metric'}
              onChange={handleUnitChange}
            />
            <span className='radio-label'>Metric</span>
          </label>
        </div>
      </li>
    </div>
  );
}

function BackgroundSetting() {
  const dispatch = useDispatch();
  const { dynamicBackground } = useSelector((state) => state.settings);

  const handleDynamicBackgroundToggle = () => {
    dispatch(toggleDynamicBackground());
  };

  return (
    <div className='settings-group'>
      <h2>Background</h2>
      <li>
        <h4>Dynamic weather background</h4>
        <label className='toggle'>
          <input
            className='toggle-input'
            type='checkbox'
            checked={dynamicBackground}
            onChange={handleDynamicBackgroundToggle}
          />
          <div className='toggle-fill switch-color'>
            <span className='toggle-option'>On</span>
            <span className='toggle-option'>Off</span>
          </div>
        </label>
      </li>
    </div>
  );
}

function IconsSetting() {
  const dispatch = useDispatch();
  const { animatedIconsDaily, animatedIconsHourly } = useSelector(
    (state) => state.settings
  );

  const handleAnimatedIconsDailyToggle = () => {
    dispatch(toggleAnimatedIconsDaily());
  };

  const HandleAnimatedIconsHourlyToggle = () => {
    dispatch(toggleAnimatedIconsHourly());
  };

  return (
    <div className='settings-group'>
      <h2>Icons</h2>
      <li>
        <h4>Animated icons - Daily Forecast</h4>
        <label className='toggle'>
          <input
            className='toggle-input'
            type='checkbox'
            checked={animatedIconsDaily}
            onChange={handleAnimatedIconsDailyToggle}
          />
          <div className='toggle-fill switch-color'>
            <span className='toggle-option'>On</span>
            <span className='toggle-option'>Off</span>
          </div>
        </label>
      </li>

      <li>
        <h4>Animated icons - Hourly Forecast</h4>
        <label className='toggle'>
          <input
            className='toggle-input'
            type='checkbox'
            checked={animatedIconsHourly}
            onChange={HandleAnimatedIconsHourlyToggle}
          />
          <div className='toggle-fill switch-color'>
            <span className='toggle-option'>On</span>
            <span className='toggle-option'>Off</span>
          </div>
        </label>
      </li>
    </div>
  );
}

export default Settings;
