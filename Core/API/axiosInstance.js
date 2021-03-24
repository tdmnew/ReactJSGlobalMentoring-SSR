import axios from 'axios';

const baseURL = process.env.DEV_URI

const api = axios.create({
  baseURL,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
