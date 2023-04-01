import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';
import componentStylesSlice from './componentStylesSlice';
import savedLocationSlice from './savedLocationSlice';
import settingSlice from './settingSlice';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cloudnine_settings', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cloudnine_settings');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    componentStyles: componentStylesSlice.reducer,
    savedLocations: savedLocationSlice.reducer,
    settings: settingSlice.reducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
