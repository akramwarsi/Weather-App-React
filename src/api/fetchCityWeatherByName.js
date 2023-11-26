import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL // 'http://localhost:8000/api/v1';

// const open_api = "https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric";


export const fetchCityWeatherByName = (cityName) => {
  const url = `${BASE_URL}weather?city=${cityName}`;
  return axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  })
    .catch((error) => {
      console.log(error);
    })
}
