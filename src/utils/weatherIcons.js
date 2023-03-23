import w01d from '../assets/weatherIcons/01d.svg';
import w01n from '../assets/weatherIcons/01n.svg';
import w02d from '../assets/weatherIcons/02d.svg';
import w02n from '../assets/weatherIcons/02n.svg';
import w03d from '../assets/weatherIcons/03d.svg';
import w03n from '../assets/weatherIcons/03n.svg';
import w04d from '../assets/weatherIcons/04d.svg';
import w04n from '../assets/weatherIcons/04n.svg';
import w09d from '../assets/weatherIcons/09d.svg';
import w09n from '../assets/weatherIcons/09n.svg';
import w10d from '../assets/weatherIcons/10d.svg';
import w10n from '../assets/weatherIcons/10n.svg';
import w11d from '../assets/weatherIcons/11d.svg';
import w11n from '../assets/weatherIcons/11n.svg';
import w13d from '../assets/weatherIcons/13d.svg';
import w13n from '../assets/weatherIcons/13n.svg';
import w50d from '../assets/weatherIcons/50d.svg';
import w50n from '../assets/weatherIcons/50n.svg';

export const getIcon = (code) => {
  switch (code) {
    case '01d':
      return w01d;
    case '01n':
      return w01n;
    case '02d':
      return w02d;
    case '02n':
      return w02n;
    case '03d':
      return w03d;
    case '03n':
      return w03n;
    case '04d':
      return w04d;
    case '04n':
      return w04n;
    case '09d':
      return w09d;
    case '09n':
      return w09n;
    case '10d':
      return w10d;
    case '10n':
      return w10n;
    case '11d':
      return w11d;
    case '11n':
      return w11n;
    case '13d':
      return w13d;
    case '13n':
      return w13n;
    case '50d':
      return w50d;
    case '50n':
      return w50n;
    default:
      return null;
  }
};
