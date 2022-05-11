import React from "react";

import './Card.css'

const Card = ({ charId, children }) => {
    return (
        <li className="character-card" key={charId}>
            {children}
        </li>
    );
}

export default Card;