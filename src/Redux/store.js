import { configureStore } from '@reduxjs/toolkit';
import settingSlice from './settingSlice';

const store = configureStore({
  reducer: {
    settings: settingSlice.reducer,
  },
});

export default store;
