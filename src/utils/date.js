function formatDate(date) {
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const dateString = date.toLocaleDateString(undefined, options);
  const [weekday, monthDay] = dateString.split(',');
  return [weekday.trim(), monthDay.trim()];
}

export { formatDate };
