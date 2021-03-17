import api from "./axiosInstance.js";

const fetchMoviesAPI = () => {
    return api
        .get("/movies")
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
};

export default fetchMoviesAPI;
