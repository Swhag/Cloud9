import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  autoSync: false,
  syncFrequency: '30',
  unit: 'imperial',
  dynamicBackground: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleAutoSync: (state) => {
      state.autoSync = !state.autoSync;
    },
    setSyncFrequency: (state, action) => {
      state.syncFrequency = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    toggleDynamicBackground: (state) => {
      state.dynamicBackground = !state.dynamicBackground;
    },
  },
});

export const {
  toggleAutoSync,
  setSyncFrequency,
  setUnit,
  toggleDynamicBackground,
} = settingsSlice.actions;

export default settingsSlice;
