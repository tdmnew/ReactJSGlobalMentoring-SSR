import React, { useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';

import MovieCard from './MovieCard/MovieCard.js';

export default function MovieList() {
  const movies = useSelector((state) => state.movies);

  const renderMovies = useCallback((movies) => movies.map(renderMovie), [
    movies,
  ]);
  const renderMovie = (movie) => <MovieCard key={movie.id} movie={movie} />;

  return (
    <>
      <div className="total">
        <span className="total__number">{movies.length}</span>
        <span className="total__text"> movies found</span>
      </div>
      <div className="movielist">{renderMovies(movies)}</div>
    </>
  );
}
