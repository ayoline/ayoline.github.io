import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #fafafa;
    margin: 1rem, 0.5rem;
`;

const Title = ({ children }) => {
    return (
        <StyledTitle className="character-title">{children}</StyledTitle>
    );
}

export default Title;