import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h1`
    color: rgb(255, 255, 255);
    font-weight: bold;
`;

const Header = () => {
    return (
        <HeaderStyled id="header">Rick and Morty</HeaderStyled>
    );
}

export default Header;