import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';
import componentStylesSlice from './componentStylesSlice';
import savedLocationSlice from './savedLocationSlice';
import settingSlice from './settingSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    componentStyles: componentStylesSlice.reducer,
    savedLocations: savedLocationSlice.reducer,
    settings: settingSlice.reducer,
  },
});

export default store;
