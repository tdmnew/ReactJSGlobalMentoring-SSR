import React from "react";
import { nanoid } from "nanoid";

export default function Dropdown({ options, checked, handleClick }) {
    const [clicked, setClicked] = React.useState(false);

    const toggleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <textarea
                className="container dropdown-btn"
                onClick={toggleClick}
                value={checked.join(", ")}
            ></textarea>
            <div
                className="container dropdown"
                style={clicked ? { display: "inherit" } : { display: "none" }}
            >
                {options.map((name) => (
                    <label className="dropdown option" key={nanoid()}>
                        <input
                            type="checkbox"
                            className="option__checkbox"
                            name={`${name}`}
                            value={`${name}`}
                            onChange={handleClick}
                            checked={checked.includes(name) ? true : false}
                        />
                        <span className="option__text">{name}</span>
                    </label>
                ))}
            </div>
        </>
    );
}
