import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { fetchMovies } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async () => {
    return axios({
        method: "get",
        url: "http://localhost:4000/movies",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((res) => {
        return res.data.data;
    });
};

export function* fetchMoviesSaga() {
    try {
        let movies = yield call(API);
        yield put(fetchMovies(movies));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchMovies() {
    yield takeEvery(sagaActions.FETCH_MOVIES, fetchMoviesSaga);
}
