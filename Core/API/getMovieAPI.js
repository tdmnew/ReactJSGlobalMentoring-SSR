import api from "./axiosInstance";

const getMovieAPI = (payload) => {
    const movieId = payload.payload;

    return api
        .get(`/movies/${movieId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export default getMovieAPI;
