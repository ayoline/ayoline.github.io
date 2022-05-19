import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import StatusIdentifier from './StatusIdentifier';
import Header from './components/Header'
import Gender from './components/Gender';
import Specie from './components/Specie';
import Status from './components/Status';
import Title from './components/Title';
import Card from './components/Card';
import Modal from './components/Modal';

export const userContext = createContext();
console.log(userContext)

const StyledLoading = styled.div`
font-size: large;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #fafafa;
`;
const StyledApp = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
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
`;
const StyledDescription = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;
const StyledMain = styled.main`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const StyledBody = styled.body`
margin: 0;
padding: 0;
font-size: 16px;
font-weight: 400;
color: #fafafa;
background-color: #444;
display: flex;
justify-content: center;
align-items: center;
`;

const AllCards = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [char, setChar] = useState();

    useEffect(() => {
        (async () => {
            setLoading(true);
            let allChars = [];
            for (let i = 1; i < 8; i++) {
                const reponse = await fetch(
                    'https://rickandmortyapi.com/api/character/?page=' + i,
                );
                const data = await reponse.json();
                allChars = allChars.concat(data.results);
            }
            setCharacters(allChars);
        })();
        setLoading(false);
    }, []);


    if (loading) {
        return <StyledLoading id="loading">Loading...</StyledLoading>;
    }

    const handleOpenCardPage = (character) => {
        window.scrollTo(0, 0);
        setOpenModal(!openModal);
        setChar(character);
    }

    return (
        <StyledBody>
            <StyledApp id="app">
                <Header />
                <StyledMain>
                    <StyledUl>
                        {openModal && <Modal closeModal={setOpenModal} charData={char} />}
                        {characters.map((character) => (
                            <Card key={character.id} onClick={() => handleOpenCardPage(character)}>
                                <Title>{character.name}</Title>
                                {StatusIdentifier(character.image, character.status)}
                                <StyledDescription className="character-description">
                                    <Status>{character.status}</Status>
                                    <Specie>{character.species}</Specie>
                                    <Gender>{character.gender}</Gender>
                                </StyledDescription>
                            </Card>
                        ))}
                    </StyledUl>
                </StyledMain>
            </StyledApp>
        </StyledBody>
    );
}

export default AllCards