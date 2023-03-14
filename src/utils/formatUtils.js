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

/**
 * Formats a Unix timestamp into a string representing the time of day,
 * formatted according to the options specified.
 *
 * @param {number} timestamp - The Unix timestamp to format.
 * @returns {string} A string representing the formatted time.
 *
 * @example
 * formatTime(1646318526) // Returns '07:28 AM'
 */
function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// --------------------------------------------------------
// --------------------------------------------------------

function formatTimeHourly(dt) {
  // Convert the Unix timestamp to milliseconds and create a new Date object
  const date = new Date(dt * 1000);

  // Get the hours, minutes, and AM/PM designation from the date
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert the hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // if hours is 0, set it to 12

  // Pad the hours and minutes with leading zeros if necessary
  const paddedHours = hours < 10 ? '0' + hours : hours;
  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Combine the formatted time with the AM/PM designation
  const formattedTime = `${paddedHours}:${paddedMinutes} ${ampm}`;

  // Return the formatted time string
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

export {
  formatDate,
  formatTime,
  formatTimeHourly,
  capitalize,
  metersToMiles,
  getWindDirection,
};
