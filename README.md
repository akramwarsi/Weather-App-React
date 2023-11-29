# Basic React Js App for Weather recommendation

Weather outfit and activity recommendation with comical weather synopsis using "Generative AI"

### 📖 Description:
A weather app built with React and Redux. It uses weather recommedation API to fetch weather data and recommendation for the searched city. The app also displays the weather for the default location if user's geolocation is enabled. The list of searched cities is stored in the Redux store and displayed in the sidebar.

###  🎉 Main Features:
- Search weather by city name
- Display the list of searched cities
- Display weather for the selected location
- Display weather for the default location (Dubai, Abu Dhabi etc)
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

![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/93859934-45cd-4089-bbee-424e780597f0)
![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/9ae75f8b-3957-4fe6-8748-8b65d7d3d7d5)
![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/1564bef8-d9b8-49b7-8071-32358da010dd)
![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/880fea2b-6321-406a-ac0e-d97aca12e69c)
![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/1cd1b63f-072f-4b77-bd90-ae9618c3276f)
![image](https://github.com/akramwarsi/Weather-App-React/assets/50487227/2e1c908e-b72a-41e9-8349-327f6f6e0d3e)






