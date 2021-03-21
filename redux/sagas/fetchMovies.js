import { call, takeEvery, put } from 'redux-saga/effects';

import fetchMoviesAPI from '../../Core/API/fetchMoviesAPI';
import { fetchMovies } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions';

export function* fetchMoviesSaga() {
  try {
    const movies = yield call(fetchMoviesAPI);
    yield put(fetchMovies(movies));
  } catch (e) {
    yield put({ type: actions.FETCH_FAILED });
  }
}

export function* watchMovies() {
  yield takeEvery(actions.FETCH_MOVIES, fetchMoviesSaga);
}
