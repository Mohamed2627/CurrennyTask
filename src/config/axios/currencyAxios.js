import axios from 'axios';

const currencyAxios = axios.create({
  baseURL: 'https://api.frankfurter.app',
  timeout: 5000,
});

export default currencyAxios;
