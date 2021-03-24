import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movies-api-react-mentoring.herokuapp.com',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
