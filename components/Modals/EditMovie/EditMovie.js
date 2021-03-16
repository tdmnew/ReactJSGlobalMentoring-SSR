import React from "react";

import Dropdown from "../Dropdown.js";

export default function EditMovie({ formik, close, genres }) {
    const handleSelect = (e) => {
        let newGenres;
        const value = e.target.value;
        const genres = formik.values.genres;

        //Check if value is not present
        if (genres.includes(value)) {
            newGenres = genres.filter((item) => item !== value);
        } else {
            newGenres = [...genres, value];
        }

        formik.setFieldValue("genres", newGenres);
    };

    return (
        <div className="form-modal">
            <div className="form-modal container">
                <button
                    className="container__close-btn"
                    title="close"
                    onClick={close}
                >
                    X
                </button>
                <form onSubmit={formik.handleSubmit}>
                    <h2>EDIT MOVIE</h2>
                    <label aria-labelledby="movieid">
                        <span>MOVIE ID</span>
                        <input
                            name="movieid"
                            className="container__movieid"
                            value={formik.values.id}
                            placeholder="Movie ID"
                            disabled
                        />
                    </label>
                    <label aria-labelledby="title">
                        <span>TITLE</span>
                        <input
                            name="title"
                            className="container__input"
                            placeholder="Movie Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title ? (
                            <span className="container error">
                                {formik.errors.title}
                            </span>
                        ) : null}
                    </label>

                    <label aria-labelledby="release_date">
                        <span>RELEASE DATE</span>
                        <input
                            name="release_date"
                            className="container__date"
                            placeholder="Movie Release Date"
                            type="date"
                            value={formik.values.release_date}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.release_date ? (
                            <span className="container error">
                                {formik.errors.release_date}
                            </span>
                        ) : null}
                    </label>

                    <label aria-labelledby="url">
                        <span>MOVIE URL</span>
                        <input
                            name="url"
                            className="container__input"
                            placeholder="Movie Website"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.url ? (
                            <span className="container error">
                                {formik.errors.url}
                            </span>
                        ) : null}
                    </label>

                    <label aria-labelledby="genre">
                        <span>GENRE</span>
                        <Dropdown
                            options={genres}
                            checked={formik.values.genres}
                            handleClick={handleSelect}
                        />
                        {formik.errors.genres ? (
                            <span className="container error">
                                {formik.errors.genres}
                            </span>
                        ) : null}
                    </label>

                    <label aria-labelledby="overview">
                        <span>OVERVIEW</span>
                        <input
                            name="overview"
                            className="container__input"
                            placeholder="Movie Overview"
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.overview ? (
                            <span className="container error">
                                {formik.errors.overview}
                            </span>
                        ) : null}
                    </label>

                    <label aria-labelledby="runtime">
                        <span>RUNTIME</span>
                        <input
                            name="runtime"
                            type="number"
                            className="container__input"
                            value={formik.values.runtime}
                            min="0"
                            placeholder="Movie Runtime"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.runtime ? (
                            <span className="container error">
                                {formik.errors.runtime}
                            </span>
                        ) : null}
                    </label>

                    <div className="container buttons">
                        <button
                            className="container buttons__reset"
                            title="reset"
                            onClick={formik.handleReset}
                        >
                            RESET
                        </button>
                        <button
                            className="container buttons__submit"
                            title="submit"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
