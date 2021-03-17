import { createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE }  from "next-redux-wrapper";

const initialState = {
    selectedMovie: {},
    movies: []
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        editMovie: (state, action) => {
            let updatedMovie = action.payload;
            // Update movie details if the film is edited
            if(state.selectedMovie.id === updatedMovie.id) {
                state.selectedMovie = action.payload;
            }
            //Add the updated movie to the array
            state.movies = state.movies.map((movie) => {
                if (movie.id === updatedMovie.id) {
                    return { ...movie, ...updatedMovie };
                }
                return movie;
            });
        },
        deleteMovie: (state, action) => {
            let id = action.payload;
            state.movies = state.movies.filter((movie) => {
                return movie.id !== id;
            });
        },
        searchMovies: (state, action) => {
            state.movies = action.payload;
        },
        filterMovies: (state, action) => {
            state.movies = action.payload;
        },
        sortMovies: (state, action) => {
            let field = action.payload;
            let oldMovies = state.movies;
            state.movies = oldMovies.sort((a, b) =>
                a[field] > b[field] ? 1 : -1
            );
        },
        getMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        fetchMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(HYDRATE, (state, action) => {
            let prevState = {
                ...current(state)
            }
            let nextState = {
                ...action.payload
            }

            const prevMovsLen = prevState.movies.length
            const nextMovsLen = nextState.movies.length
            const nextSelMovLen = Object.keys(nextState.selectedMovie).length

            //Check state len diffs
            if(prevMovsLen > 0 && nextMovsLen === 0 && nextSelMovLen !== 0) {
                nextState.movies = prevState.movies
            }

            return  { ...nextState }
        })
    }
});

export const {
    fetchMovies,
    searchMovies,
    sortMovies,
    filterMovies,
    addMovie,
    getMovie,
    editMovie,
    deleteMovie,
} = moviesSlice.actions;

export default moviesSlice;
