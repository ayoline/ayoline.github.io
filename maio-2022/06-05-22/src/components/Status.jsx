import React from "react";

import './Status.css';

const Status = ({ children }) => {
    return (
        <p>
            <b>Status:</b>{' '}
            {children === 'Dead' ? (
                <span className="dead-text"> {children}</span>
            ) : children === 'Alive' ? (
                <span className="alive-text"> {children}</span>
            ) : (
                <span className="unknown-text"> {children}</span>
            )}
        </p>
    );
}

export default Status;