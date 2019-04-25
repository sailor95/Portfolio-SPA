import axios from 'axios';

export default axios.create({
  //baseURL: 'https://portfolio-webapi.azurewebsites.net/api/'
  baseURL: 'https://localhost:44318/api/'
});