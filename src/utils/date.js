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

export { formatDate };
