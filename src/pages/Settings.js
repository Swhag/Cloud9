import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleAutoSync,
  setSyncFrequency,
  setUnit,
  toggleDynamicBackground,
} from '../redux/settingSlice';
import '../styles/settings.css';

function Settings(props) {
  const dispatch = useDispatch();
  const { autoSync, syncFrequency, unit, dynamicBackground } = useSelector(
    (state) => state.settings
  );

  const speedUnits = unit === 'metric' ? 'km/h' : 'mi';
  const temperatureUnits = unit === 'metric' ? '°C' : '°F';

  const handleAutoSyncToggle = () => {
    dispatch(toggleAutoSync());
  };

  const handleSyncFrequencyChange = (event) => {
    dispatch(setSyncFrequency(event.target.value));
  };

  const handleUnitChange = (event) => {
    dispatch(setUnit(event.target.value));
  };

  const handleDynamicBackgroundToggle = () => {
    dispatch(toggleDynamicBackground());
  };

  return (
    <div className='settings-container'>
      <SynchronizationSetting
        autoSync={autoSync}
        syncFrequency={syncFrequency}
        handleAutoSyncToggle={handleAutoSyncToggle}
        handleSyncFrequencyChange={handleSyncFrequencyChange}
      />

      <UnitsSetting
        unit={unit}
        speedUnits={speedUnits}
        temperatureUnits={temperatureUnits}
        handleUnitChange={handleUnitChange}
      />

      <BackgroundSetting
        dynamicBackground={dynamicBackground}
        handleDynamicBackgroundToggle={handleDynamicBackgroundToggle}
      />
    </div>
  );
}

function SynchronizationSetting(props) {
  const {
    autoSync,
    syncFrequency,
    handleAutoSyncToggle,
    handleSyncFrequencyChange,
  } = props;

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
        <div className='radio-group'>
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

function UnitsSetting(props) {
  const { unit, speedUnits, temperatureUnits, handleUnitChange } = props;

  return (
    <div className='settings-group'>
      <h2>Units</h2>

      <li>
        <h4>Temperature: {temperatureUnits}</h4>
      </li>

      <li>
        <h4>Speed: {speedUnits}</h4>
        <div className='radio-group'>
          <label className='radio'>
            <input
              type='radio'
              value='metric'
              checked={unit === 'metric'}
              onChange={handleUnitChange}
            />
            <span className='radio-label'>Metric</span>
          </label>
          <label className='radio'>
            <input
              type='radio'
              value='imperial'
              checked={unit === 'imperial'}
              onChange={handleUnitChange}
            />
            <span className='radio-label'>Imperial</span>
          </label>
        </div>
      </li>
    </div>
  );
}

function BackgroundSetting(props) {
  const { dynamicBackground, handleDynamicBackgroundToggle } = props;
  return (
    <div className='settings-group'>
      <h2>Background settings</h2>
      <li>
        <h4>Dynamic background</h4>
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

export default Settings;
