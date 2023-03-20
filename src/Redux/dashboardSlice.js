import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboardStyle: {
      background: 'rgba(0, 0, 0, 0.4)',
    },
  },
  reducers: {
    setBackground: (state, action) => {
      const code = action.payload;
      let background = 'rgba(0, 0, 0, 0.4)';

      switch (code) {
        // 01d (clearDay)
        case '01d':
          background = 'rgba(0, 0, 0, 0.3)';
          break;

        // 01n (clearNight)
        case '01n':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 02d (fewCloudsDay)
        case '02d':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 02n (fewCloudsNight)
        case '02n':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 03d (scatteredCloudDay)
        case '03d':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 03n (scatteredCloudNight)
        case '03n':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 04d (brokenCloudsDay)
        case '04d':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 04n (brokenCloudsNight)
        case '04n':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 09d (showerDay) || 10d (rainDay)
        case '09d':
        case '10d':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 09n (rainNight) || 10n (rainNight)
        case '09n':
        case '10n':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 11d (thunder)
        case '11d':
        case '11n':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 13d (snowDay)
        case '13d':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 13n (snowNight)
        case '13n':
          background = 'rgba(0, 0, 0, 0.5)';
          break;

        // 50d (mistDay)
        case '50d':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        // 50n (mistNight)
        case '50n':
          background = 'rgba(0, 0, 0, 0.4)';
          break;

        default:
          return null;
      }
      state.dashboardStyle.background = background;
    },
  },
});

export default dashboardSlice;
export const { setBackground } = dashboardSlice.actions;
