# Cloud9

Cloud9 - new and improved weather app (in-progress)

# Cloud9 - Weather Dashboard

Click Here: [Live Demo](https://swhag.github.io/Cloud9/) :point_left:

## Project Overview

### Description

### Features

### Development Challenges

Challenge 1: Multiple locations with the same name.

The application utilizes the React-Select library to display multiple locations with the same name. An API call fetches coordinates for these locations, and when a user selects an option, it triggers another API call to retrieve the accurate weather data.

Challenge 2: Avoiding unnecessary API Calls

Excessive API calls slow down the app's performance and increase costs. For example, updating the suggestion list in real-time for a search term like "Manhattan" may result in nine API calls (one for each letter).

Solution: The app implements a Debounce hook that waits for 500ms after the user stops typing before triggering an API call. This approach reduces the number of unnecessary API calls, improving app performance and reducing costs.

### Frameworks

- Javascript Framework

  - [React](https://reactjs.org/)

### Tools

- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [ChartJS](https://www.chartjs.org/)
- [react-select](https://www.npmjs.com/package/react-select)
- [react-indiana-drag-scroll](https://www.npmjs.com/package/react-indiana-drag-scroll)
- [OpenWeatherMap API](https://openweathermap.org/api)
