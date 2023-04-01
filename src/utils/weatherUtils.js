import { formatDate } from './formatUtils';

function groupHourlyForecastByDay(hourlyForecast) {
  const days = {};

  // Loop through the hourly forecast data
  for (let i = 0; i < hourlyForecast.length; i++) {
    const forecast = hourlyForecast[i];

    // Get the day of the forecast
    const day = new Date(forecast.dt * 1000).toLocaleDateString();
    const date = new Date(forecast.dt * 1000);
    const [weekday, monthDay] = formatDate(date);

    // If the day is not in the days object, add it
    if (!days[monthDay]) {
      days[monthDay] = [];
    }

    // Add the forecast to the corresponding day
    days[monthDay].push(forecast);
  }

  return days;
}

export { groupHourlyForecastByDay };
