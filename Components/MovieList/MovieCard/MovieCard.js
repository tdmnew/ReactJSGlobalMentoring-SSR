import React, { useState, useContext, Suspense } from 'react';
import propTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Link from 'next/link';

import {
  IMG_FALLBACK,
  PRIMARY_COLOUR,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../../../Core/Constants';
import { TRANSLATIONS } from '../../../Core/I18N';
import { ModalUpdaterContext } from '../../../HOCs/Context/ModalContext.js';

import Image from '../../Image/Image';

export default function MovieCard({ movie }) {
  const [menuToggled, setMenuToggled] = useState(false);
  const setModalOptions = useContext(ModalUpdaterContext);

  const toggleEditModal = (e) => {
    e.preventDefault();
    setModalOptions({
      isOpen: true,
      modalProps: {
        type: EDIT_MOVIE,
        info: { ...movie },
      },
    });
    setMenuToggled(!menuToggled);
  };

  const toggleDeleteModal = (e) => {
    const { id } = movie;
    e.preventDefault();
    setModalOptions({
      isOpen: true,
      modalProps: { type: DELETE_MOVIE, info: { id } },
    });
    setMenuToggled(!menuToggled);
  };

  const toggleCardMenu = (e) => {
    e.preventDefault();
    setMenuToggled(!menuToggled);
  };

  const fallbackImage = (e) => {
    e.target.src = IMG_FALLBACK;
  };

  const year = movie.release_date !== undefined
    ? movie.release_date.substring(0, 4)
    : null;

  const genres = movie.genres.length > 1 ? movie.genres.join(', ') : movie.genres;

  return (
    <>
      <Link className="link" href={`/films/${movie.id}`}>
        <div className="moviecard">
          <div className="moviecard poster">
            <Suspense
              fallback={(
                <Loader
                  height={320}
                  width={220}
                  color={PRIMARY_COLOUR}
                />
                              )}
            >
              <Image
                type="moviecard"
                imgSrc={movie.poster_path}
                title={movie.title}
              />
            </Suspense>
            <button
              title="menu"
              className="moviecard poster__btn"
              onClick={toggleCardMenu}
              style={{
                display: menuToggled ? 'none' : 'inherit',
              }}
            >
              &#8942;
            </button>
            <div
              className="moviecard poster menu"
              style={{
                display: menuToggled ? 'inherit' : 'none',
              }}
            >
              <button
                className="moviecard poster menu__close"
                value="close"
                onClick={toggleCardMenu}
              >
                X
              </button>
              <button
                className="moviecard poster menu__edit"
                title="edit"
                value="edit"
                onClick={toggleEditModal}
              >
                {TRANSLATIONS.EN.EDIT}
              </button>
              <button
                className="moviecard poster menu__delete"
                title="delete"
                value="delete"
                onClick={toggleDeleteModal}
              >
                {TRANSLATIONS.EN.DELETE}
              </button>
            </div>
          </div>
          <div className="moviecard details">
            <div className="moviecard details__top">
              <h3 className="moviecard details__top--title">
                {movie.title}
              </h3>
              <span className="moviecard details__top--year">
                {year}
              </span>
            </div>
            <div className="moviecard details__bottom">
              <span className="moviecard details__bottom--genre">
                {genres}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    tagline: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    vote_count: propTypes.number.isRequired,
    genres: propTypes.array.isRequired,
    release_date: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    budget: propTypes.number.isRequired,
    revenue: propTypes.number.isRequired,
    runtime: propTypes.number,
    poster_path: propTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: propTypes.shape({
    id: 1,
    title: 'Blade Runner',
    tagline: '',
    vote_average: 4.3,
    vote_count: 100,
    genres: ['Sci-Fi'],
    release_date: '1982-01-01',
    overview: '',
    budget: 100000,
    revenue: 200000,
    runtime: 120,
    poster_path:
            'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg',
  }),
};
