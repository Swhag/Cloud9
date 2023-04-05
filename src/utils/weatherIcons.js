import a01d from '../assets/weatherIcons/01d.svg';
import a01n from '../assets/weatherIcons/01n.svg';
import a02d from '../assets/weatherIcons/02d.svg';
import a02n from '../assets/weatherIcons/02n.svg';
import a03d from '../assets/weatherIcons/03d.svg';
import a03n from '../assets/weatherIcons/03n.svg';
import a04d from '../assets/weatherIcons/04d.svg';
import a04n from '../assets/weatherIcons/04n.svg';
import a09d from '../assets/weatherIcons/09d.svg';
import a09n from '../assets/weatherIcons/09n.svg';
import a10d from '../assets/weatherIcons/10d.svg';
import a10n from '../assets/weatherIcons/10n.svg';
import a11d from '../assets/weatherIcons/11d.svg';
import a11n from '../assets/weatherIcons/11n.svg';
import a13d from '../assets/weatherIcons/13d.svg';
import a13n from '../assets/weatherIcons/13n.svg';
import a50d from '../assets/weatherIcons/50d.svg';
import a50n from '../assets/weatherIcons/50n.svg';
import s01d from '../assets/staticWeatherIcons/s01d.svg';
import s01n from '../assets/staticWeatherIcons/s01n.svg';
import s02d from '../assets/staticWeatherIcons/s02d.svg';
import s02n from '../assets/staticWeatherIcons/s02n.svg';
import s03d from '../assets/staticWeatherIcons/s03d.svg';
import s03n from '../assets/staticWeatherIcons/s03n.svg';
import s04d from '../assets/staticWeatherIcons/s04d.svg';
import s04n from '../assets/staticWeatherIcons/s04n.svg';
import s09d from '../assets/staticWeatherIcons/s09d.svg';
import s09n from '../assets/staticWeatherIcons/s09n.svg';
import s10d from '../assets/staticWeatherIcons/s10d.svg';
import s10n from '../assets/staticWeatherIcons/s10n.svg';
import s11d from '../assets/staticWeatherIcons/s11d.svg';
import s11n from '../assets/staticWeatherIcons/s11n.svg';
import s13d from '../assets/staticWeatherIcons/s13d.svg';
import s13n from '../assets/staticWeatherIcons/s13n.svg';
import s50d from '../assets/staticWeatherIcons/s50d.svg';
import s50n from '../assets/staticWeatherIcons/s50n.svg';

const getIcon = (code) => {
  switch (code) {
    case '01d':
      return a01d;
    case '01n':
      return a01n;
    case '02d':
      return a02d;
    case '02n':
      return a02n;
    case '03d':
      return a03d;
    case '03n':
      return a03n;
    case '04d':
      return a04d;
    case '04n':
      return a04n;
    case '09d':
      return a09d;
    case '09n':
      return a09n;
    case '10d':
      return a10d;
    case '10n':
      return a10n;
    case '11d':
      return a11d;
    case '11n':
      return a11n;
    case '13d':
      return a13d;
    case '13n':
      return a13n;
    case '50d':
      return a50d;
    case '50n':
      return a50n;
    default:
      return null;
  }
};

const getStaticIcon = (code) => {
  switch (code) {
    case '01d':
      return s01d;
    case '01n':
      return s01n;
    case '02d':
      return s02d;
    case '02n':
      return s02n;
    case '03d':
      return s03d;
    case '03n':
      return s03n;
    case '04d':
      return s04d;
    case '04n':
      return s04n;
    case '09d':
      return s09d;
    case '09n':
      return s09n;
    case '10d':
      return s10d;
    case '10n':
      return s10n;
    case '11d':
      return s11d;
    case '11n':
      return s11n;
    case '13d':
      return s13d;
    case '13n':
      return s13n;
    case '50d':
      return s50d;
    case '50n':
      return s50n;
    default:
      return null;
  }
};

export { getIcon, getStaticIcon };
