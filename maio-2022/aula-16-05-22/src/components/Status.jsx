import React from "react";
import styled from 'styled-components';

const StatusDead = styled.span`
    color: #ff0000;
`;

const StatusAlive = styled.span`
    color: #00ff00;
`;

const StatusUnknown = styled.span`
    color: rgb(138, 138, 138);
`;

const Status = ({ children }) => {
    return (
        <p>
            <b>Status:</b>{' '}
            {children === 'Dead' ? (
                <StatusDead className="dead-text"> {children}</StatusDead>
            ) : children === 'Alive' ? (
                <StatusAlive className="alive-text"> {children}</StatusAlive>
            ) : (
                <StatusUnknown className="unknown-text"> {children}</StatusUnknown>
            )}
        </p>
    );
}

export default Status;