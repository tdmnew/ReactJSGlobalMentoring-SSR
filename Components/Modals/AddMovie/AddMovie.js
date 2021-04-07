import React from 'react';

import { GENRES } from '../../../Core/Constants';
import { TRANSLATIONS } from '../../../Core/I18N';

import Dropdown from '../Dropdown.js';

export default function AddMovie({ formik, close }) {
  const handleSelect = (e) => {
    let newGenres;
    const { value } = e.target;
    const { genres } = formik.values;

    // Check if value is not present
    if (genres.includes(value)) {
      newGenres = genres.filter((item) => item !== value);
    } else {
      newGenres = [...genres, value];
    }

    formik.setFieldValue('genres', newGenres);
  };

  const renderTitle = () => (
    <>
      <label aria-labelledby="title">
        <span>{TRANSLATIONS.EN.TITLE}</span>
        <input
          name="title"
          title="title"
          className="container__input"
          placeholder={TRANSLATIONS.EN.MOVIE_TITLE}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.title ? (
        <span className="container error">
          {formik.errors.title}
        </span>
      ) : null}
    </>
  );

  const renderReleaseDate = () => (
    <>
      <label aria-labelledby="release date">
        <span>{TRANSLATIONS.EN.RELEASE_DATE}</span>
        <input
          name="release_date"
          title="release_date"
          className="container__date"
          placeholder={TRANSLATIONS.EN.MOVIE_RELEASE_DATE}
          type="date"
          value={formik.values.release_date}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.release_date ? (
        <span className="container error">
          {formik.errors.release_date}
        </span>
      ) : null}
    </>
  );

  const renderUrl = () => (
    <>
      <label aria-labelledby="url">
        <span>{TRANSLATIONS.EN.MOVIE_URL}</span>
        <input
          name="url"
          title="url"
          className="container__input"
          placeholder={TRANSLATIONS.EN.MOVIE_WEBSITE}
          value={formik.values.url}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.url ? (
        <span className="container error">{formik.errors.url}</span>
      ) : null}
    </>
  );

  const renderGenres = () => (
    <>
      <label aria-labelledby="genres">
        <span>{TRANSLATIONS.EN.GENRE}</span>
        <Dropdown
          options={GENRES}
          checked={formik.values.genres}
          handleSelect={handleSelect}
        />
      </label>
      {formik.errors.genres ? (
        <span className="container error">
          {formik.errors.genres}
        </span>
      ) : null}
    </>
  );

  const renderOverview = () => (
    <>
      <label aria-labelledby="overview">
        <span>{TRANSLATIONS.EN.OVERVIEW}</span>
        <input
          name="overview"
          title="overview"
          className="container__input"
          placeholder={TRANSLATIONS.EN.MOVIE_OVERVIEW}
          value={formik.values.overview}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.overview ? (
        <span className="container error">
          {formik.errors.overview}
        </span>
      ) : null}
    </>
  );

  const renderRuntime = () => (
    <>
      <label aria-labelledby="runtime">
        <span>{TRANSLATIONS.EN.RUNTIME}</span>
        <input
          name="runtime"
          title="runtime"
          type="number"
          min="0"
          className="container__input"
          placeholder={TRANSLATIONS.EN.MOVIE_RUNTIME}
          value={formik.values.runtime}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.runtime ? (
        <span className="container error">
          {formik.errors.runtime}
        </span>
      ) : null}
    </>
  );

  const renderCloseButton = () => (
    <button
      className="container__close-btn"
      title="close"
      onClick={close}
    >
      X
    </button>
  );

  const renderButtons = () => (
    <div className="container buttons">
      <button
        title="reset"
        className="container buttons__reset"
        onClick={formik.handleReset}
      >
        {TRANSLATIONS.EN.RESET}
      </button>
      <button
        title="submit"
        className="container buttons__submit"
        type="submit"
      >
        {TRANSLATIONS.EN.SUBMIT}
      </button>
    </div>
  );

  const renderForm = () => (
    <form onSubmit={formik.handleSubmit}>
      <h2>{TRANSLATIONS.EN.ADD_MOVIE}</h2>
      {renderTitle()}
      {renderReleaseDate()}
      {renderUrl()}
      {renderGenres()}
      {renderOverview()}
      {renderRuntime()}
      {renderButtons()}
    </form>
  );

  return (
    <div className="form-modal">
      <div className="form-modal container">
        {renderCloseButton()}
        {renderForm()}
      </div>
    </div>
  );
}
