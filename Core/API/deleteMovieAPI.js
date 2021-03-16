import api from "./axiosInstance";

const deleteMovieAPI = (payload) => {
    const movieId = payload.payload;
    return api.delete(`/movies/${movieId}`)
}

export default deleteMovieAPI;
