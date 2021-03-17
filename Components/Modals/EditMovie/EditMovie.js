import React from 'react';

import { GENRES } from '../../../Core/Constants';
import { TRANSLATIONS } from '../../../Core/I18N';

import Dropdown from '../Dropdown.js';

export default function EditMovie({ formik, close }) {
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

    const renderMovieId = () => {
        return (
            <label aria-labelledby="movieid">
                <span>{TRANSLATIONS.EN.MOVIE_ID}</span>
                <input
                    name="movieid"
                    className="container__movieid"
                    value={formik.values.id}
                    placeholder="Movie ID"
                    disabled
                />
            </label>
        );
    };

    const renderTitle = () => {
        return (
            <>
                <label aria-labelledby="title">
                    <span>{TRANSLATIONS.EN.TITLE}</span>
                    <input
                        name="title"
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
    };

    const renderReleaseDate = () => {
        return (
            <>
                <label aria-labelledby="release_date">
                    <span>{TRANSLATIONS.EN.RELEASE_DATE}</span>
                    <input
                        name="release_date"
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
    };

    const renderUrl = () => {
        return (
            <>
                <label aria-labelledby="url">
                    <span>{TRANSLATIONS.EN.MOVIE_URL}</span>
                    <input
                        name="url"
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
    };

    const renderGenres = () => {
        return (
            <>
                <label aria-labelledby="genre">
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
    };

    const renderOverview = () => {
        return (
            <>
                <label aria-labelledby="overview">
                    <span>{TRANSLATIONS.EN.OVERVIEW}</span>
                    <input
                        name="overview"
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
    };

    const renderRuntime = () => {
        return (
            <>
                <label aria-labelledby="runtime">
                    <span>{TRANSLATIONS.EN.RUNTIME}</span>
                    <input
                        name="runtime"
                        type="number"
                        className="container__input"
                        value={formik.values.runtime}
                        min="0"
                        placeholder={TRANSLATIONS.EN.MOVIE_RUNTIME}
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
    };

    const renderCloseButton = () => {
        return (
            <button
                className="container__close-btn"
                title="close"
                onClick={close}
            >
                X
            </button>
        );
    };

    const renderButtons = () => {
        return (
            <div className="container buttons">
                <button
                    className="container buttons__reset"
                    title="reset"
                    onClick={formik.handleReset}
                >
                    {TRANSLATIONS.EN.RESET}
                </button>
                <button
                    className="container buttons__submit"
                    title="submit"
                    type="submit"
                >
                    {TRANSLATIONS.EN.SUBMIT}
                </button>
            </div>
        );
    };

    const renderForm = () => {
        return (
            <form onSubmit={formik.handleSubmit}>
                <h2>{TRANSLATIONS.EN.EDIT_MOVIE}</h2>
                {renderMovieId()}
                {renderTitle()}
                {renderReleaseDate()}
                {renderUrl()}
                {renderGenres()}
                {renderOverview()}
                {renderRuntime()}
                {renderButtons()}
            </form>
        );
    };

    return (
        <div className="form-modal">
            <div className="form-modal container">
                {renderCloseButton()}
                {renderForm()}
            </div>
        </div>
    );
}
