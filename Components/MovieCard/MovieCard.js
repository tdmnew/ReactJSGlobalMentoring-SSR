import React from "react";
import propTypes from "prop-types";
import Link from "next/link";

import { ModalUpdaterContext } from "../../context/ModalContext.js";

export default function MovieCard({ movie }) {
    const [menuToggled, setMenuToggled] = React.useState(false);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const toggleEditModal = (e) => {
        e.preventDefault();
        setModalOptions({
            isOpen: true,
            modalProps: {
                type: "Edit Movie",
                info: { ...movie },
            },
        });
        setMenuToggled(!menuToggled);
    };

    const toggleDeleteModal = (e) => {
        const id = movie.id;
        e.preventDefault();
        setModalOptions({
            isOpen: true,
            modalProps: { type: "Delete Movie", info: { id } },
        });
        setMenuToggled(!menuToggled);
    };

    const toggleCardMenu = (e) => {
        e.preventDefault();
        setMenuToggled(!menuToggled);
    };

    const fallbackImage = (e) => {
        e.target.src =
            "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg";
    };

    return (
        <>
            <Link className="link" href={`/films/${movie.id}`}>
                <div className="moviecard">
                    <div className="moviecard poster">
                        <img
                            className="moviecard poster__img"
                            src={movie.poster_path}
                            onError={fallbackImage}
                            alt={`${movie.title} poster`}
                        />
                        <button
                            title="menu"
                            className="moviecard poster__btn"
                            onClick={toggleCardMenu}
                            style={{
                                display: menuToggled ? "none" : "inherit",
                            }}
                        >
                            &#8942;
                        </button>
                        <div
                            className="moviecard poster menu"
                            style={{
                                display: menuToggled ? "inherit" : "none",
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
                                Edit
                            </button>
                            <button
                                className="moviecard poster menu__delete"
                                title="delete"
                                value="delete"
                                onClick={toggleDeleteModal}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="moviecard details">
                        <div className="moviecard details__top">
                            <h3 className="moviecard details__top--title">
                                {movie.title}
                            </h3>
                            <span className="moviecard details__top--year">
                                {movie.release_date !== undefined? movie.release_date.substring(0, 4) : null}
                            </span>
                        </div>
                        <div className="moviecard details__bottom">
                            <span className="moviecard details__bottom--genre">
                                {movie.genres.length > 1
                                    ? movie.genres.join(", ")
                                    : movie.genres}
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
        runtime: propTypes.number.isRequired,
        poster_path: propTypes.string.isRequired,
    }),
};

MovieCard.defaultProps = {
    movie: propTypes.shape({
        id: 1,
        title: "Blade Runner",
        tagline: "",
        vote_average: 4.3,
        vote_count: 100,
        genres: ["Sci-Fi"],
        release_date: "1982-01-01",
        overview: "",
        budget: 100000,
        revenue: 200000,
        runtime: 120,
        poster_path:
            "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
    }),
};
