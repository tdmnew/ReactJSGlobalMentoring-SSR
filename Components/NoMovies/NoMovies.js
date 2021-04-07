import React from 'react';

import { TRANSLATIONS } from '../../Core/I18N';

export default function NoMovies() {
  return (
    <div className="no-movies">
      <span className="no-movies__text">
        {TRANSLATIONS.EN.NO_MOVIE_FOUND}
      </span>
    </div>
  );
}
