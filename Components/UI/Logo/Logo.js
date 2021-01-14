import React from "react";

const Logo = ({ ...rest }) => {
    return (
        <h1 className="logo" {...rest}>
            <span className="logo--left">netflix</span>
            <span className="logo--right">roulette</span>
        </h1>
    );
};

export default Logo;
