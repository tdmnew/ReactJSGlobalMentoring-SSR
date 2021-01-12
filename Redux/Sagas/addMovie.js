import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { addMovie } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let movie = payload.payload
    delete movie.url

    return axios({
        method: "POST",
        url: "http://localhost:4000/movies",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        data: {
            ...movie
        }
    })
    .then((res) => {
        return res.data;
    })
};

export function* addMovieSaga({ payload }) {
    try {
        let movie = yield call(API, { payload });
        yield put(addMovie(movie));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchAddMovie() {
    yield takeEvery(sagaActions.ADD_MOVIE, addMovieSaga);
}
