import React from "react"
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Card from "./components/Card";
import StatusIdentifier from './StatusIdentifier';
import Gender from './components/Gender';
import Specie from './components/Specie';
import Status from './components/Status';
import Title from './components/Title';

const StyledDescription = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledUl = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
background-color: #444;
color: #fafafa;
`;

const CardPage = ({ children }) => {

    const char = useLocation();
    const character = char.state;

    return (
        <StyledUl>
            <Card key={character.id} >
                <Title>{character.name}</Title>
                {StatusIdentifier(character.image, character.status)}
                <StyledDescription className="character-description">
                    <Status>{character.status}</Status>
                    <Specie>{character.species}</Specie>
                    <Gender>{character.gender}</Gender>
                </StyledDescription>
            </Card>
        </StyledUl>
    );
}

export default CardPage