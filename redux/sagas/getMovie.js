import { call, takeEvery, put } from 'redux-saga/effects';

import getMovieAPI from '../../Core/API/getMovieAPI';
import { getMovie } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions';

export function* getMovieSaga({ payload }) {
  try {
    const movie = yield call(getMovieAPI, { payload });
    yield put(getMovie(movie));
  } catch (e) {
    yield put({ type: actions.GET_MOVIE_FAILED });
  }
}

export function* watchGetMovie() {
  yield takeEvery(actions.GET_MOVIE, getMovieSaga);
}
