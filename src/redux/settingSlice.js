import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  autoSync: false,
  syncFrequency: '30',
  unit: 'imperial',
};

export const settingSlice = createSlice({
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
  },
});

export const { toggleAutoSync, setSyncFrequency, setUnit } =
  settingSlice.actions;

export default settingSlice;
