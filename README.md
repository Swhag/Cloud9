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



![cloud9-1](https://user-images.githubusercontent.com/109196962/230288060-c5904d25-9001-4f57-9276-aabab6ba4c06.PNG)



![cloud9-2](https://user-images.githubusercontent.com/109196962/230287481-8c734cd3-c194-4943-ac66-f2b334671a2a.PNG)
![cloud9-3](https://user-images.githubusercontent.com/109196962/230287506-0f3b5922-63f3-4c9e-a2d5-664a6b1ec0f7.PNG)
![cloud9-4](https://user-images.githubusercontent.com/109196962/230287519-8f8f6bc1-33b5-45ef-bce7-b57ad3214c82.PNG)



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
