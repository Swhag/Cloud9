import { createSlice } from '@reduxjs/toolkit';
import { getImage } from '../utils/weatherImages';
import { setFilter } from '../utils/backgroundFilter';
import { setDashboardColor } from '../utils/dashboardColor';

const initialState = {
  showNavbar: false,
  currentPage: 'dashboard',
  backgroundConfig: {
    backgroundImage: '',
    backgroundSize: 'cover',
  },
  backgroundFilter: {
    backgroundColor: '',
  },
  dashboardStyle: {
    background: '',
  },
};

export const componentStylesSlice = createSlice({
  name: 'componentStyles',
  initialState,
  reducers: {
    setShowNavbar: (state, action) => {
      state.showNavbar = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setBackgroundConfig: (state, action) => {
      state.backgroundConfig = {
        backgroundImage: `url(${getImage(action.payload || 'default')})`,
        backgroundSize: 'cover',
      };
    },

    setBackgroundFilter: (state, action) => {
      state.backgroundFilter.backgroundColor = setFilter(
        action.payload || 'default'
      );
    },

    setDashboardStyle: (state, action) => {
      state.dashboardStyle.background = setDashboardColor(
        action.payload || 'default'
      );
    },
  },
});

export const {
  setShowNavbar,
  setCurrentPage,
  setBackgroundConfig,
  setBackgroundSize,
  setBackgroundFilter,
  setDashboardStyle,
} = componentStylesSlice.actions;

export default componentStylesSlice;
