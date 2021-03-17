import api from "./axiosInstance";

const addMovieAPI = (payload) => {
    const movie = payload.payload;
    delete movie.url;

    return api
        .post("/movies", {
            ...movie,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export default addMovieAPI;
