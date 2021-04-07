import api from './axiosInstance.js';

const fetchMoviesAPI = () => api
  .get('/movies')
  .then((res) => res.data.data)
  .catch((err) => console.log(err));

export default fetchMoviesAPI;
