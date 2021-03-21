import React from 'react';

import { TRANSLATIONS } from '../../../Core/I18N';

export default function DeleteMovie({ close, submit }) {
  return (
    <div className="message-modal">
      <div className="message-modal container">
        <button className="container__close-btn" onClick={close}>
          X
        </button>
        <form onSubmit={submit}>
          <h2>{TRANSLATIONS.EN.DELETE_MOVIE}</h2>
          <p>{TRANSLATIONS.EN.DELETE_MOVIE_CONFIRM}</p>
          <div className="container buttons">
            <button
              className="container buttons__confirm"
              type="submit"
            >
              {TRANSLATIONS.EN.CONFIRM}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
