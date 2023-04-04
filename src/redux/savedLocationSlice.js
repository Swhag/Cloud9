import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedLocations: [],
  currentLocation: {
    name: '',
    lat: '',
    lon: '',
  },
  autoDetect: false,
};

const savedLocationSlice = createSlice({
  name: 'savedLocations',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const newLocation = {
        name: action.payload.name,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };

      state.savedLocations.push(newLocation);
    },

    removeLocation: (state, action) => {
      const index = state.savedLocations.findIndex(
        (savedLocation) => savedLocation.name === action.payload
      );
      if (index !== -1) {
        state.savedLocations.splice(index, 1);
      }
    },

    addCurrentLocationName: (state, action) => {
      state.currentLocation.name = action.payload;
      // console.log(state.currentLocation);
    },

    addCurrentLocationLat: (state, action) => {
      state.currentLocation.lat = action.payload;
    },

    addCurrentLocationLon: (state, action) => {
      state.currentLocation.lon = action.payload;
    },

    toggleAutoDetect: (state) => {
      state.autoDetect = !state.autoDetect;
    },

    setAutoDetect: (state, action) => {
      state.autoDetect = action.payload;
    },
  },
});

export const {
  toggleAutoDetect,
  setAutoDetect,
  addLocation,
  removeLocation,
  addCurrentLocationName,
  addCurrentLocationLat,
  addCurrentLocationLon,
} = savedLocationSlice.actions;
export default savedLocationSlice;
