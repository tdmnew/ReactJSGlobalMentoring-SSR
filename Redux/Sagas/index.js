import { all } from "redux-saga/effects";

import { watchMovies } from "./fetchMovies.js";
import { watchMoviesSearch } from "./searchMovies.js";
import { watchMoviesFilter } from "./filterMovies.js";
import { watchAddMovie } from "./addMovie.js";
import { watchEditMovie } from "./editMovie.js";
import { watchDeleteMovie } from "./deleteMovie.js";
import { watchGetMovie } from "./getMovie.js";

export default function* rootSaga() {
    yield all([
        watchGetMovie(),
        watchMovies(),
        watchMoviesSearch(),
        watchMoviesFilter(),
        watchAddMovie(),
        watchEditMovie(),
        watchDeleteMovie(),
    ]);
}
