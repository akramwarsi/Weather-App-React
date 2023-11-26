# Project: Generative AI - Full Stack Development Task For Rak Bank

Weather outfit and activity recommendation App with Generative AI synopsis.

### 📖 Description:
A weather app built with React and Redux. It uses weather recommedation API to fetch weather data and recommendation for the searched city. The app also displays the weather for the default location if user's geolocation is enabled. The list of searched cities is stored in the Redux store and displayed in the sidebar.

###  🎉 Main Features:
- Search weather by city name
- Display the list of searched cities
- Display weather for the selected location
- Display weather for the default location (Dubai, Abu Dhabi, Karachi etc)
- Remove an item from the list

![DEMO]()

### Built with:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) and [React Redux](https://react-redux.js.org/) for state management
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/)
- [SCSS](https://sass-lang.com/)

### 🛠️ How to run locally:
- Clone this repository
- Make sure you have node version installed 16.14.2
- Run `npm install` to install all dependencies
- Create a `.env` file in the root directory
- Add your Backend API key in the `.env` file as `REACT_APP_API_URL=your_api_url`
- Run `npm start` to start the app
- Open http://localhost:3000 to view it in the browser.
- Run `npm start:prod` to start the app with production configuration for testing before deployment.

### How to build:
- Run `npm build` to create the build for testing locally.
- Run `npm build:prod` to create the build for production deployment.

### How to test:
- Run `npm test` to run test cases.

### Error Handling:
- Error handling for invalid API key (console error for now)
- The application provides weather data summary for any city or anything provided in the city input, it does not check for the original city validations.

