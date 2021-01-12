import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { searchMovies } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let term = payload.payload;
    return axios({
        method: "get",
        url: "http://localhost:4000/movies",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        params: {
            search: term,
            searchBy: "title",
        },
    }).then((res) => {
        return res.data.data;
    });
};

export function* searchMoviesSaga({ payload }) {
    try {
        let movie = yield call(API, { payload });
        yield put(searchMovies(movie));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchMoviesSearch() {
    yield takeEvery(sagaActions.SEARCH_MOVIES, searchMoviesSaga);
}
