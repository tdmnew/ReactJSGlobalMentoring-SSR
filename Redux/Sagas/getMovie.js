import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { getMovie } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let id = payload.payload
    return axios({
        method: "get",
        url: `http://localhost:4000/movies/${id}`,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((res) => {
        return res.data;
    });
};

export function* getMovieSaga({ payload }) {
    try {
        let movie = yield call(API, { payload });
        yield put(getMovie(movie));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchGetMovie() {
    yield takeEvery(sagaActions.GET_MOVIE, getMovieSaga);
}
