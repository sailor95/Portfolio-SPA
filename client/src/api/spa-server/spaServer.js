import axios from 'axios';

export default axios.create({
  baseURL: 'https://portfolio-webapi.azurewebsites.net/api/'
});