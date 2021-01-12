import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { filterMovies } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let genre = payload.payload;
    return axios({
        method: "get",
        url: "http://localhost:4000/movies",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        params: {
            filter: genre,
        },
    }).then((res) => {
        return res.data.data;
    });
};

export function* filterMoviesSaga({ payload }) {
    try {
        let movies = yield call(API, { payload });
        yield put(filterMovies(movies));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchMoviesFilter() {
    yield takeEvery(sagaActions.FILTER_MOVIES, filterMoviesSaga);
}
