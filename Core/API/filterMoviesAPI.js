import api from "./axiosInstance";

const filterMoviesAPI = (payload) => {
    const genre = payload.payload;

    return api
        .get("/movies", {
            params: { filter: genre },
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
};

export default filterMoviesAPI;
