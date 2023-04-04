import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: [],
  location: null,
  lat: null,
  lon: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weatherData = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
  },
});

export const { setWeather, setLocation, setLat, setLon } = weatherSlice.actions;
export default weatherSlice;
