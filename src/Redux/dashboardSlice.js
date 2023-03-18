import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboardStyle: {
      background: 'rgba(0, 0, 0, 0.2)',
    },
  },
});

export default dashboardSlice;
