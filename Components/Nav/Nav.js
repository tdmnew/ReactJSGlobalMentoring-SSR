import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRANSLATIONS } from '../../Core/I18N';
import { sagaActions as actions } from '../../redux/sagas/sagaActions';
import { sortMovies } from '../../redux/slices/movies.js';

import Link from './Link/Link';

export default function Nav() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const genres = movies
    .map((movie) => movie.genres)
    .flat()
    .filter((v, i, s) => s.indexOf(v) === i)
    .slice(0, 6)
    .sort();

  const sort = (e) => {
    dispatch(sortMovies(e.target.value));
  };

  const filter = (e) => {
    const genre = e.target.getAttribute('href').slice(1);
    if (genre === 'ALL') {
      dispatch({ type: actions.FETCH_MOVIES });
    } else {
      dispatch({ type: actions.FILTER_MOVIES, payload: genre });
    }
  };

  const returnGenres = useCallback((genres) => genres.map(returnGenre), [
    genres,
  ]);

  const returnGenre = (genre) => <Link key={genre} href={genre} clickAction={filter} />;

  return (
    <div className="nav">
      <ul className="nav__links">
        <Link href={TRANSLATIONS.EN.ALL} clickAction={filter} />
        {returnGenres(genres)}
      </ul>
      <div className="dropdown">
        <span className="dropdown__heading">
          {TRANSLATIONS.EN.SORT_BY}
        </span>
        <select className="dropdown__options" onChange={sort}>
          <option value="release_date">
            {TRANSLATIONS.EN.RELEASE_DATE}
          </option>
          <option value="title">{TRANSLATIONS.EN.TITLE}</option>
          <option value="genres">{TRANSLATIONS.EN.GENRE}</option>
          <option value="vote_average">{TRANSLATIONS.EN.RATING}</option>
        </select>
      </div>
    </div>
  );
}
