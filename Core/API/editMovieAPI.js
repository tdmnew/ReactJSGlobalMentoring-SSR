import api from "./axiosInstance";

const editMovieAPI = (payload) => {
    const movie = payload.payload;
    delete movie.url;

    return api
        .put("/movies", {
            ...movie,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export default editMovieAPI;
