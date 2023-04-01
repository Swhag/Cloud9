/**
 * Formats a date object into an array of weekday and month/day strings.
 *
 * @param {Date} date - The date object to format.
 * @returns {Array} An array containing the weekday and month/day strings.
 *
 * @example
 * formatDate(new Date('2022-03-06')) // Returns ['Sunday', 'Mar 6']
 */

function formatDate(date) {
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const dateString = date.toLocaleDateString(undefined, options);
  const [weekday, monthDay] = dateString.split(',');
  return [weekday.trim(), monthDay.trim()];
}

// --------------------------------------------------------
// --------------------------------------------------------

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // if hours is 0, it should be 12
  const formattedHours = hours < 10 ? `${hours}` : hours; // remove the leading zero from the hours if necessary
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  return formattedTime;
}

// --------------------------------------------------------
// --------------------------------------------------------

function capitalize(words) {
  const spacedWord = words.toLowerCase().split(' ');
  for (let i = 0; i < spacedWord.length; i++) {
    spacedWord[i] =
      spacedWord[i].charAt(0).toUpperCase() + spacedWord[i].substring(1);
  }
  return spacedWord.join(' ');
}

// --------------------------------------------------------
// --------------------------------------------------------

function metersToMiles(meters) {
  const milesPerMeter = 0.000621371192;
  return parseFloat((meters * milesPerMeter).toFixed(1));
}

function getWindDirection(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round((degrees % 360) / 45);
  return directions[index];
}

// --------------------------------------------------------
// --------------------------------------------------------

export { formatDate, formatTime, capitalize, metersToMiles, getWindDirection };
