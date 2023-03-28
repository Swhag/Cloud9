import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedLocations: [],
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
  },
});

export const { addLocation, removeLocation } = savedLocationSlice.actions;
export default savedLocationSlice;
