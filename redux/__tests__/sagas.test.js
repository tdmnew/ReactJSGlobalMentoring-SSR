import React from "react";

import { expectSaga } from "redux-saga-test-plan";
import { call, put } from "redux-saga/effects";

import { addMovieSaga } from "../Sagas/addMovie.js";
import { editMovieSaga } from "../Sagas/editMovie.js";
import { deleteMovieSaga } from "../Sagas/deleteMovie.js";
import { fetchMoviesSaga } from "../Sagas/fetchMovies.js";
import { filterMoviesSaga } from "../Sagas/filterMovies.js";
import { getMovieSaga } from "../Sagas/getMovie.js";
import { searchMoviesSaga } from "../Sagas/searchMovies.js";

import {
    getMovie,
    fetchMovies,
    filterMovies,
    searchMovies,
    addMovie,
    editMovie,
    deleteMovie,
} from "../Slices/movies.js";

// https://github.com/jfairbank/redux-saga-test-plan/issues/345
describe("Testing Sagas", () => {
    const api = {
        getMovie: id => ({ id: 1, title: "test" }),
        fetchMovies: () => [{ title: "test" }, { title: "test2" }],
        filterMovies: term => payload,
        searchMovies: term => [{ title: "test" }, { title: "test2" }],
        addMovie: movie => payload,
        editMovie: movie => payload,
        deleteMovie: id => null,
    };

    it("Gets a movie", () => {
        return expectSaga(getMovieSaga, api.getMovie)
            .dispatch(getMovie({ id: 1, title: "test" }))
            .run();
    });

    it("Fetches movies", () => {
        const payload = [{ title: "test" }, { title: "test2" }];

        return expectSaga(fetchMoviesSaga, api.fetchMovies)
            .dispatch(fetchMovies(payload))
            .run();
    });

    it("Filters movies", () => {
        const payload = [{ title: "test" }, { title: "test2" }];

        return expectSaga(filterMoviesSaga, api.filterMovies)
            .dispatch(filterMovies(payload))
            .run();
    });

    it("Searches movies", () => {
        return expectSaga(searchMoviesSaga, api.searchMovies)
            .dispatch(searchMovies([{ title: "test" }, { title: "test2" }]))
            .run();
    });

    it("Adds a movie", () => {
        const payload = {
            title: "Blade Runner",
            tagline: "test",
            vote_average: 4.3,
            vote_count: 100,
            genres: ["Sci-Fi"],
            release_date: "1982-01-01",
            overview: "test",
            budget: 100000,
            revenue: 200000,
            runtime: 120,
            poster_path:
                "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
        };

        return expectSaga(addMovieSaga, api.addMovie)
            .dispatch(addMovie(payload))
            .run();
    });

    it("Edits a movie", () => {
        const payload = {
            id: 1,
            title: "Blade Runner",
            tagline: "test",
            vote_average: 4.3,
            vote_count: 100,
            genres: ["Sci-Fi"],
            release_date: "1982-01-01",
            overview: "test",
            budget: 100000,
            revenue: 200000,
            runtime: 120,
            poster_path:
                "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
        };

        return expectSaga(editMovieSaga, api.editMovie)
            .dispatch(editMovie(payload))
            .run();
    });

    it("Deletes a movie", () => {
        return expectSaga(deleteMovieSaga, 1).dispatch(deleteMovie(1)).run();
    });
});
