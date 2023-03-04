import w01d from '../icons/01d.svg';
import w01n from '../icons/01n.svg';
import w02d from '../icons/02d.svg';
import w02n from '../icons/02n.svg';
import w03d from '../icons/03d.svg';
import w03n from '../icons/03n.svg';
import w04d from '../icons/04d.svg';
import w04n from '../icons/04n.svg';
import w09d from '../icons/09d.svg';
import w09n from '../icons/09n.svg';
import w10d from '../icons/10d.svg';
import w10n from '../icons/10n.svg';
import w11d from '../icons/11d.svg';
import w11n from '../icons/11n.svg';
import w13d from '../icons/13d.svg';
import w13n from '../icons/13n.svg';
import w50d from '../icons/50d.svg';
import w50n from '../icons/50n.svg';

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
      return null; // or return a default icon if the code is not recognized
  }
};
