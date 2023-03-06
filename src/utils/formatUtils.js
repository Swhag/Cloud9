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

export { formatDate, formatTime };
