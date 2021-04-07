import { call, takeEvery, put } from 'redux-saga/effects';

import filterMoviesAPI from '../../Core/API/filterMoviesAPI';
import { filterMovies } from '../slices/movies.js';
import { sagaActions as actions } from './sagaActions';

export function* filterMoviesSaga({ payload }) {
  try {
    const movies = yield call(filterMoviesAPI, { payload });
    yield put(filterMovies(movies));
  } catch (e) {
    yield put({ type: actions.FILTER_MOVIES_FAILED });
  }
}

export function* watchMoviesFilter() {
  yield takeEvery(actions.FILTER_MOVIES, filterMoviesSaga);
}
