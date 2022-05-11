import React from "react";
import styled from "styled-components";

const CardList = styled.li`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
`;

const Card = ({ charId, children }) => {
    return (
        <CardList className="character-card" key={charId}>
            {children}
        </CardList>
    );
}

export default Card;