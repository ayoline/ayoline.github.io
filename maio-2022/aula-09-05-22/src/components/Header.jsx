import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h1`
    color: rgb(255, 255, 255);
    font-weight: bold;
`;

const Header = () => {
    return (
        <header>
            <HeaderStyled id="header">Rick and Morty</HeaderStyled>
        </header>
    );
}

export default Header;