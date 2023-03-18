import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboardStyle: {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

export default dashboardSlice;
