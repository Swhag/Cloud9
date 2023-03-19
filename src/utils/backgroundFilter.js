export const setFilter = (code) => {
  switch (code) {
    // 01d (clearDay)
    case '01d':
      return 'rgba(0, 0, 0, 0.1)';
    // return 'rgba(255, 255, 255, 0.1)';

    // 01n (clearNight)
    case '01n':
      return 'rgba(0, 0, 0, 0.1)';

    // 02d (fewCloudsDay)
    case '02d':
      return 'rgba(0, 0, 0, 0.1)';

    // 02n (fewCloudsNight)
    case '02n':
      return 'rgba(0, 0, 0, 0.1)';

    // 03d (scatteredCloudDay)
    case '03d':
      return 'rgba(0, 0, 0, 0)';

    // 03n (scatteredCloudNight)
    case '03n':
      return 'rgba(255, 255, 255, 0.15)';

    // 04d (brokenCloudsDay)
    case '04d':
      return 'rgba(0, 0, 0, 0.1)';

    // 04n (brokenCloudsNight)
    case '04n':
      return 'rgba(0, 0, 0, 0.2)';

    // 09d (showerDay)
    case '09d':
      return 'rgba(0, 0, 0, 0.1)';

    // 09n (rainNight)
    case '09n':
      return 'rgba(0, 0, 0, 0.1)';

    // 10d (rainDay)
    case '10d':
      return 'rgba(0, 0, 0, 0.1)';

    // 10n (rainNight)
    case '10n':
      return 'rgba(0, 0, 0, 0.1)';

    // 11d (thunder)
    case '11d':
      return 'rgba(0, 0, 0, 0.1)';

    // 11n (thunder)
    case '11n':
      return 'rgba(0, 0, 0, 0.1)';

    // 13d (snowDay)
    case '13d':
      return 'rgba(0, 0, 0, 0.1)';

    // 13n (snowNight)
    case '13n':
      return 'rgba(0, 0, 0, 0.1)';

    // 50d (mistDay)
    case '50d':
      return 'rgba(0, 0, 0, 0.1)';

    // 50n (mistNight)
    case '50n':
      return 'rgba(0, 0, 0, 0.1)';

    default:
      return null;
  }
};

// export default styleDashboard;
