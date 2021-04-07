import React, { useState, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import { PRIMARY_COLOUR } from '../../Core/Constants';
import { sagaActions as actions } from '../../redux/sagas/sagaActions';

import Image from '../Image/Image';

export default function MovieDetails({ movie }) {
  const year = movie.release_date !== undefined
    ? movie.release_date.substring(0, 4)
    : null;

  return (
    <>
      <div className="moviedetails">
        <Suspense
          fallback={(
            <Loader
              height={190}
              width={80}
              color={PRIMARY_COLOUR}
            />
                      )}
        >
          <Image
            title={movie.title}
            imgSrc={movie.poster_path}
            type="moviedetails"
          />
        </Suspense>
        <div className="moviedetails text">
          <div className="text top">
            <h2 className="text top__title">{movie.title}</h2>
            <span className="text top__rating">
              {movie.vote_average}
            </span>
          </div>
          <span className="text genre">{movie.tagline}</span>
          <div className="text center">
            <span className="text center__year">{year}</span>
            <span className="text center__runtime">
              {movie.runtime}
              {' '}
              min
            </span>
            <br />
          </div>
          <div className="text bottom">
            <p className="text bottom__overview">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
