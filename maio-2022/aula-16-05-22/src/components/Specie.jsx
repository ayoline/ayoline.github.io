import React from "react";

const Specie = ({ children }) => {
    return (
        <p>
            <b>Specie:</b> <span>{children}</span>
        </p>
    );
}

export default Specie;