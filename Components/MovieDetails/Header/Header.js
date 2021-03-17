import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { ADD_MOVIE, FILMS_PATH } from '../../../Core/Constants';
import { TRANSLATIONS } from '../../../Core/I18N';
import { ModalUpdaterContext } from '../../../HOCs/Context/ModalContext.js';

import MovieDetails from '../MovieDetails.js';
import Search from './Search.js';

export default function Header() {
    const router = useRouter();
    const id = router.query;
    const history = router.pathname;

    const movie = useSelector((state) => state.selectedMovie);

    const setModalOptions = useContext(ModalUpdaterContext);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const path = history.split('/')[1];
        if (path === FILMS_PATH) {
            setIsOpen(true);
        }
    }, [id]);

    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: ADD_MOVIE } });
    };

    const toggleDetails = () => {
        setIsOpen(false);
    };

    const title = TRANSLATIONS.EN.APP_NAME.split(' ');

    return (
        <>
            <div className="header">
                <div className="header__top">
                    <h1 className="header__top logo">
                        <span className="header__top logo--left">
                            {title[0]}
                        </span>
                        <span className="header__top logo--right">
                            {title[1]}
                        </span>
                    </h1>
                    {isOpen ? (
                        <button
                            className="header__top btn--search"
                            onClick={toggleDetails}
                        />
                    ) : (
                        <button
                            className="header__top btn"
                            onClick={toggleAddMovieModal}
                        >
                            {TRANSLATIONS.EN.ADD_MOVIE} +
                        </button>
                    )}
                </div>
                {isOpen ? <MovieDetails movie={movie} /> : <Search />}
            </div>
        </>
    );
}
