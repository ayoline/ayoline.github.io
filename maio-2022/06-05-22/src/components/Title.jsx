import React from "react";

import './Title.css'

const Title = ({ children }) => {
    return (
        <h2 className="character-title">{children}</h2>
    );
}

export default Title;