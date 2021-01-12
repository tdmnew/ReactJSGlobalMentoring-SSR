import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { editMovie } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let movie = payload.payload;
    delete movie.url;

    return axios({
        method: "PUT",
        url: "http://localhost:4000/movies",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        data: {
            ...movie,
        },
    }).then((res) => {
        return res.data;
    });
};

export function* editMovieSaga({ payload }) {
    try {
        delete payload.url;
        let movie = yield call(API, { payload });
        yield put(editMovie(movie));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchEditMovie() {
    yield takeEvery(sagaActions.EDIT_MOVIE, editMovieSaga);
}
