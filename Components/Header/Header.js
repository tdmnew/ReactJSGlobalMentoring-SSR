import React from "react";
import { useSelector } from "react-redux";

import { ModalUpdaterContext } from "../../context/ModalContext.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import Search from "./Search.js";

export default function Header() {
    const setModalOptions = React.useContext(ModalUpdaterContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const movie = useSelector(state => state.selectedMovie);

    React.useEffect(() => {
        if(movie !== undefined) {
            setIsOpen(true)
        }

        if(movie !== undefined && Object.keys(movie).length === 0) {
            setIsOpen(false)
        }
    }, [movie])

    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: "Add Movie" } });
    };

    const toggleDetails = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="header">
                <div className="header__top">
                    <h1 className="header__top logo">
                        <span className="header__top logo--left">netflix</span>
                        <span className="header__top logo--right">
                            roulette
                        </span>
                    </h1>
                    {isOpen ? (
                        <button
                            className="header__top btn--search"
                            onClick={toggleDetails}
                        >
                        </button>
                    ) : (
                        <button
                            className="header__top btn"
                            onClick={toggleAddMovieModal}
                        >
                            + ADD MOVIE
                        </button>
                    )}
                </div>
                {isOpen ? <MovieDetails movie={movie} /> : <Search />}
            </div>
        </>
    );
}
