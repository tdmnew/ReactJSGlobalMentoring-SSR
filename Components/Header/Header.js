import React from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import Logo from "../UI/Logo";

import MovieDetails from "../MovieDetails/MovieDetails.js";
import Search from "./Search.js";

import { ModalUpdaterContext } from "../../context/ModalContext.js";

export default function Header() {
    const setModalOptions = React.useContext(ModalUpdaterContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const movie = useSelector((state) => state.selectedMovie);

    React.useEffect(() => {
        if (movie !== undefined) {
            setIsOpen(true);
        }

        if (movie !== undefined && Object.keys(movie).length === 0) {
            setIsOpen(false);
        }
    }, [movie]);

    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: "Add Movie" } });
    };

    const toggleDetails = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="header">
                <div className="header__top">
                    <Logo />
                    {isOpen ? (
                        <button
                            className="header__top btn--search"
                            onClick={toggleDetails}
                        ></button>
                    ) : (
                        <Button
                            onClick={toggleAddMovieModal}
                            label="+ ADD MOVIE"
                        />
                    )}
                </div>
                {isOpen ? <MovieDetails movie={movie} /> : <Search />}
            </div>
        </>
    );
}
