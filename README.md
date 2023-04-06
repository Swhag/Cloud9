# Cloud9

Cloud9 - new and improved weather app (in-progress)

# Cloud9 - Weather Dashboard

Click Here: [Live Demo](https://swhag.github.io/Cloud9/) :point_left:

## Project Overview

### Description

### Features

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

<img src="https://user-images.githubusercontent.com/109196962/230288839-95d7031b-0eda-4557-a474-734cf3a50bff.PNG" width="600">
<div style="display: flex;" >
  <img src="https://user-images.githubusercontent.com/109196962/230288841-ed409b8c-1809-4272-a433-a965d58cc098.PNG" width="200">
  <img src="https://user-images.githubusercontent.com/109196962/230288844-2a01107a-0e1f-4e4f-99aa-c2d111162129.PNG" width="200">
  <img src="https://user-images.githubusercontent.com/109196962/230288846-3211c83d-1c6d-4d81-bbe7-d0b09f07c238.PNG" width="200">
</div>

### Development Challenges

Challenge 1: Multiple locations with the same name.

Solution: The application utilizes the React-Select library to display multiple locations with the same name. An API call fetches coordinates for these locations, and when a user selects an option, it triggers another API call to retrieve the accurate weather data.

---

Challenge 2: Avoiding unnecessary API Calls

Excessive API calls slow down the app's performance and increase costs. For example, updating the suggestion list in real-time for a search term like "Manhattan" may result in nine API calls (one for each letter).

Solution: The app implements a Debounce hook that waits for 500ms after the user stops typing before triggering an API call. This approach reduces the number of unnecessary API calls, improving app performance and reducing costs.

---

Challenge 3: Forecast layout

Designing an hourly forecast dashboard presented challenges. A horizontal layout was chosen over a vertical layout for its visual appeal, but sideways scrolling was not user-friendly.

Solution: To improve the user experience, the application implements react-indiana-drag-scroll, allowing users to click and drag the forecast list instead of having to awkwardly scroll sideways.
