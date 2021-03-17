import React, { useState } from 'react';

export default function Dropdown({ options, checked, handleSelect }) {
    const [clicked, setClicked] = useState(false);

    const toggleClick = () => {
        setClicked(!clicked);
    };

    const renderOptions = (options) => options.map(renderOption);

    const renderOption = (option) => (
        <label className="dropdown option" key={option}>
            <input
                type="checkbox"
                className="option__checkbox"
                name={`${option}`}
                value={`${option}`}
                onChange={handleSelect}
                checked={checked.includes(option)}
            />
            <span className="option__text">{option}</span>
        </label>
    );

    return (
        <>
            <textarea
                className="container dropdown-btn"
                onClick={toggleClick}
                value={checked.join(', ')}
            />
            <div
                className="container dropdown"
                style={clicked ? { display: 'inherit' } : { display: 'none' }}
            >
                {renderOptions(options)}
            </div>
        </>
    );
}
