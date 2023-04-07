import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  autoSync: false,
  syncFrequency: '30',
  unit: 'imperial',
  animatedIconsDaily: true,
  animatedIconsHourly: false,
  dynamicBackground: true,
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

    toggleUnit: (state) => {
      state.unit = state.unit === 'imperial' ? 'metric' : 'imperial';
    },

    toggleAnimatedIconsDaily: (state) => {
      state.animatedIconsDaily = !state.animatedIconsDaily;
    },

    toggleAnimatedIconsHourly: (state) => {
      state.animatedIconsHourly = !state.animatedIconsHourly;
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
  toggleUnit,
  toggleDynamicBackground,
  toggleAnimatedIconsDaily,
  toggleAnimatedIconsHourly,
} = settingsSlice.actions;

export default settingsSlice;
