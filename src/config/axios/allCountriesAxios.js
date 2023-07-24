import axios from 'axios';

const allCountriesAxios = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 5000,
});

export default allCountriesAxios;
