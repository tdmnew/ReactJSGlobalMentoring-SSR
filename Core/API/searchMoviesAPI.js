import api from "./axiosInstance";

const searchMoviesAPI = (payload) => {
    const term = payload.payload;

    return api
        .get(`/movies`, {
            params: {
                search: term,
                searchBy: "title",
            },
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
};

export default searchMoviesAPI;
