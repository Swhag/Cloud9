import clearDay from '../assets/images/clearDay.jpg';
import clearNight from '../assets/images/clearNight.jpg';
import fewCloudsDay from '../assets/images/fewCloudsDay.jpg';
import fewCloudsNight from '../assets/images/fewCloudsNight.jpg';
import scatteredCloudDay from '../assets/images/scatteredCloudDay.jpg';
import scatteredCloudNight from '../assets/images/scatteredCloudNight.jpg';
import brokenCloudsDay from '../assets/images/brokenCloudsDay.jpg';
import brokenCloudsNight from '../assets/images/brokenCloudsNight.jpg';

import rainNight from '../assets/images/rainNight.jpg';
import rainDay from '../assets/images/rainDay.jpg';

import thunder from '../assets/images/thunder.jpg';
import snowDay from '../assets/images/snowDay.jpg';
import snowNight from '../assets/images/snowNight.jpg';
import mistDay from '../assets/images/mistDay.jpg';
import mistNight from '../assets/images/mistNight.jpg';

export const getImage = (code) => {
  switch (code) {
    // 01d (clear sky day)
    case '01d':
      return clearDay;

    // 01n (clear sky night)
    case '01n':
      return clearNight;

    // 02d (few clouds day)
    case '02d':
      return fewCloudsDay;

    // 02n (few clouds night)
    case '02n':
      return fewCloudsNight;

    // 03d (scattered clouds day)
    case '03d':
      return scatteredCloudDay;

    // 03n (scattered clouds night)
    case '03n':
      return scatteredCloudNight;

    // 04d (broken clouds day)
    case '04d':
      return brokenCloudsDay;

    // 04n (broken clouds night)
    case '04n':
      return brokenCloudsNight;

    // 09d (shower rain day) || 10d (rain day)
    case '09d':
    case '10d':
      return rainDay;

    // 09n (shower rain night) || 10n (rain night)
    case '09n':
    case '10n':
      return rainNight;

    // 11d (thunderstorm day) || 11n (thunderstorm night)
    case '11d':
    case '11n':
      return thunder;

    // 13d (snow day)
    case '13d':
      return snowDay;

    // 13n (snow night)
    case '13n':
      return snowNight;

    // 50d (mist day)
    case '50d':
      return mistDay;

    // 50n (mist night)
    case '50n':
      return mistNight;

    default:
      return null;
  }
};

export {
  clearDay,
  clearNight,
  fewCloudsDay,
  fewCloudsNight,
  scatteredCloudDay,
  scatteredCloudNight,
  brokenCloudsDay,
  brokenCloudsNight,
  rainNight,
  rainDay,
  thunder,
  snowDay,
  snowNight,
  mistDay,
  mistNight,
};
