import { configureStore } from '@reduxjs/toolkit';
import savedLocationSlice from './savedLocationSlice';
import settingSlice from './settingSlice';

const store = configureStore({
  reducer: {
    savedLocations: savedLocationSlice.reducer,
    settings: settingSlice.reducer,
  },
});

export default store;
