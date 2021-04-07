import { call, takeEvery, put } from 'redux-saga/effects';

import deleteMovieAPI from '../../Core/API/deleteMovieAPI';
import { deleteMovie } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions';

export function* deleteMovieSaga({ payload }) {
  try {
    yield call(deleteMovieAPI, { payload });
    yield put(deleteMovie(payload));
  } catch (e) {
    yield put({ type: actions.DELETE_MOVIE_FAILED });
  }
}

export function* watchDeleteMovie() {
  yield takeEvery(actions.DELETE_MOVIE, deleteMovieSaga);
}
