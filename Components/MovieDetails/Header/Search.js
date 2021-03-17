import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { ENTER_KEY } from '../../../Core/Constants';
import { TRANSLATIONS } from '../../../Core/I18N';

export default function Search() {
    const [term, setTerm] = useState('');
    const history = useRouter();

    const handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            handleSearch();
        }
    };

    const handleSearch = () => {
        history.push(`/search/${term}`);
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="search">
            <h2 className="search title">{TRANSLATIONS.EN.SEARCH_TITLE}</h2>
            <div className="search search-bar">
                <input
                    className="search search-bar__input"
                    placeholder={TRANSLATIONS.EN.SEARCH_PLACEHOLDER}
                    value={term}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
                <button
                    className="search search-bar__btn"
                    onClick={handleSearch}
                >
                    {TRANSLATIONS.EN.SEARCH_BUTTON}
                </button>
            </div>
        </div>
    );
}
