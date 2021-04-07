import { call, takeEvery, put } from 'redux-saga/effects';

import addMovieAPI from '../../Core/API/addMovieAPI';
import { addMovie } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions.js';

export function* addMovieSaga({ payload }) {
  try {
    const movie = yield call(addMovieAPI, { payload });
    yield put(addMovie(movie));
  } catch (e) {
    yield put({ type: actions.ADD_MOVIE_FAILED });
  }
}

export function* watchAddMovie() {
  yield takeEvery(actions.ADD_MOVIE, addMovieSaga);
}
