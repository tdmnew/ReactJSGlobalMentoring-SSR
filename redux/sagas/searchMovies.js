import { call, takeEvery, put } from 'redux-saga/effects';

import searchMoviesAPI from '../../Core/API/searchMoviesAPI';
import { searchMovies } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions';

export function* searchMoviesSaga({ payload }) {
  try {
    const movie = yield call(searchMoviesAPI, { payload });
    yield put(searchMovies(movie));
  } catch (e) {
    yield put({ type: actions.SEARCH_MOVIES_FAILED });
  }
}

export function* watchMoviesSearch() {
  yield takeEvery(actions.SEARCH_MOVIES, searchMoviesSaga);
}
