import './App.css';
import React, { useEffect, useState } from 'react';

import StatusIdentifier from './StatusIdentifier';
import Header from './components/Header'
import Gender from './components/Gender';
import Specie from './components/Specie';
import Status from './components/Status';
import Title from './components/Title';
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

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
    return <div id="loading">Loading...</div>;
  }

  return (
    <div id="app">
      <Header />
      <main>
        <ul>
          {characters.map((character) => (
            <Card key={character.id}>
              <Title>{character.name}</Title>
              {StatusIdentifier(character.image, character.status)}
              <div className="character-description">
                <Status>{character.status}</Status>
                <Specie>{character.species}</Specie>
                <Gender>{character.gender}</Gender>
              </div>
            </Card>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;