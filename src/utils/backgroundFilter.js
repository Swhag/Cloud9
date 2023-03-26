export const setFilter = (code) => {
  switch (code) {
    // 01d (clearDay)
    case '01d':
      return 'rgba(255, 255, 255, 0.25)';

    // 01n (clearNight)
    case '01n':
      return 'rgba(255, 255, 255, 0.1)';

    // 02d (fewCloudsDay) || 03d (scatteredCloudDay)
    case '02d':
    case '03d':
      return 'rgba(255, 255, 255, 0.2)';

    // 02n (fewCloudsNight) || 03n (scatteredCloudNight)
    case '02n':
    case '03n':
      return 'rgba(255, 255, 255, 0)';

    // 04d (brokenCloudsDay)
    case '04d':
      return 'rgba(255, 255, 255, 0.3)';

    // 04n (brokenCloudsNight)
    case '04n':
      return 'rgba(255, 255, 255, 0)';

    // 09d (showerDay) || 10d (rainDay)
    case '09d':
    case '10d':
      return 'rgba(255, 255, 255, 0)';

    // 09n (rainNight) || 10n (rainNight)
    case '09n':
    case '10n':
      return 'rgba(0, 0, 0, 0.2)';

    // 11d (thunder)
    case '11d':
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
      return 'rgba(255, 255, 255, 0.25)';
  }
};
