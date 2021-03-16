import React from "react";

const Button = ({ label, ...rest }) => {
    return (
        <button className="button" {...rest}>
            {label}
        </button>
    );
};

export default Button;
