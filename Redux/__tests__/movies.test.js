import React from "react";

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import movies from "../Slices/movies.js";

describe("Redux movies slice testing", () => {
    const actions = {
        addMovie: {
            type: "movies/addMovie",
            payload: {
                id: 1,
                title: "Blade Runner",
                tagline: "",
                vote_average: 4.3,
                vote_count: 100,
                genres: ["Sci-Fi"],
                release_date: "1982-01-01",
                overview: "",
                budget: 100000,
                revenue: 200000,
                runtime: 120,
                poster_path:
                    "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
            },
        },
        editMovie: {
            type: "movies/editMovie",
            payload: {
                id: 1,
                title: "Blade Runner 2",
                tagline: "",
                vote_average: 4.3,
                vote_count: 100,
                genres: ["Sci-Fi"],
                release_date: "1982-01-01",
                overview: "",
                budget: 100000,
                revenue: 200000,
                runtime: 120,
                poster_path:
                    "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
            },
        },
        deleteMovie: {
            type: "movies/deleteMovie",
            payload: 1,
        },
        getMovie: {
            type: "movies/getMovie",
            payload: { id: 1, title: "test" }
        },
        fetchMovies: {
            type: "movies/fetchMovies",
            payload: [{ id: 1, title: "test" }],
        },
        filterMovies: {
            type: "movies/filterMovies",
            payload: [{ id: 1, title: "test" }],
        },
        searchMovies: {
            type: "movies/fetchMovies",
            payload: [{ id: 1, title: "test" }],
        },
        sortMovies: {
            type: "movies/sortMovies",
            payload: "title"
        }
    }

    it("Adds a movie", () => {
        const initialState = {
            selectedMovie: {},
            movies: [],
        };

        const expectedState = {
            selectedMovie: {},
            movies: [
                {
                    id: 1,
                    title: "Blade Runner",
                    tagline: "",
                    vote_average: 4.3,
                    vote_count: 100,
                    genres: ["Sci-Fi"],
                    release_date: "1982-01-01",
                    overview: "",
                    budget: 100000,
                    revenue: 200000,
                    runtime: 120,
                    poster_path:
                        "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
                },
            ],
        };


        const actual = movies.reducer(initialState, actions.addMovie);
        expect(actual).toEqual(expectedState);
    });

    it("Edits a movie", () => {
        const initialState = {
            selectedMovie: {
                id: 2,
            },
            movies: [
                {
                    id: 1,
                    title: "Blade Runner",
                    tagline: "",
                    vote_average: 4.3,
                    vote_count: 100,
                    genres: ["Sci-Fi"],
                    release_date: "1982-01-01",
                    overview: "",
                    budget: 100000,
                    revenue: 200000,
                    runtime: 120,
                    poster_path:
                        "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
                },
            ],
        };

        const expectedState = {
            selectedMovie: {
                id: 2,
            },
            movies: [
                {
                    id: 1,
                    title: "Blade Runner 2",
                    tagline: "",
                    vote_average: 4.3,
                    vote_count: 100,
                    genres: ["Sci-Fi"],
                    release_date: "1982-01-01",
                    overview: "",
                    budget: 100000,
                    revenue: 200000,
                    runtime: 120,
                    poster_path:
                        "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
                },
            ],
        };

        const actual = movies.reducer(initialState, actions.editMovie);
        expect(actual).toEqual(expectedState);
    });

    it("Deletes a movie", () => {
        const initialState = {
            selectedMovie: {},
            movies: [{ id: 1 }],
        };

        const expectedState = {
            selectedMovie: {},
            movies: [],
        };

        const actual = movies.reducer(initialState, actions.deleteMovie);
        expect(actual).toEqual(expectedState);
    });

    it("Updates the selected movie", () => {
        const initialState = {
            selectedMovie: {},
            movies: [],
        };

        const expectedState = {
            selectedMovie: { id: 1, title: "test" },
            movies: [],
        };

        const actual = movies.reducer(initialState, actions.getMovie);
        expect(actual).toEqual(expectedState);
    })

    it("Fetches, filters, searches for movies", () => {
        const initialState = {
            selectedMovie: {},
            movies: [],
        };

        const expectedState = {
            selectedMovie: {},
            movies: [{ id: 1, title: "test" }],
        };


        const actualFetch = movies.reducer(initialState, actions.fetchMovies);
        expect(actualFetch).toEqual(expectedState);

        const actualFilter = movies.reducer(initialState, actions.filterMovies);
        expect(actualFilter).toEqual(expectedState);

        const actualSearchMovies = movies.reducer(initialState, actions.searchMovies);
        expect(actualSearchMovies).toEqual(expectedState);
    });

    it("Sorts movies", () => {
        const initialState = {
            selectedMovie: {},
            movies: [{ id: 2, title: "B" }, { id: 1, title: "A" } ]
        };

        const expectedState = {
            selectedMovie: {},
            movies: [{ id: 1, title: "A" }, { id: 2, title: "B" } ]
        };
     
        const actual = movies.reducer(initialState, actions.sortMovies);
        expect(actual).toEqual(expectedState);
    });
});
