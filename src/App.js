import React, { useEffect } from 'react';
import axios from "axios";

import {Personaje} from "./Character"
import './App.css';
import { ListaPersonajes } from './CharacterList';
import { SearchBar } from './SearchBar';
import { Selector } from './Selector';

function App() {

  const urlCharacter =  'https://rickandmortyapi.com/api/character';
  const urlEpisode = 'https://rickandmortyapi.com/api/episode/49';
 
  // estado para controlar la seleccion
  const [selectedValue, setSelectedValue] = React.useState('character');


  const [postCharacter, setPostCharacter ] = React.useState('');
  // const [postEpisode, setPostEpisode ] = React.useState('');

  // character
  useEffect(() => {
    axios.get(urlCharacter).then((response) => {
      setPostCharacter(response.data);
    });
  }, []);

  // episode
  // useEffect(() => {
  //   axios.get(urlEpisode).then((response) => {
  //     setPostEpisode(response.data);
  //   });
  // }, []);
  
  console.log('esta es la info de los personajes',postCharacter.info);

  console.log('Personajes detallado ',postCharacter.results);
  const personajes = postCharacter.results;
  const episode = postCharacter.results;

  console.log('episodios ',episode)
  return (
    <React.Fragment>
      <Selector
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      />
      <SearchBar/>

    {selectedValue==='character' && (
      <ListaPersonajes
        personajes={personajes}
      // render props
        render = {item => (
            <Personaje
              key={item.name}
              name={item.name}
              species={item.species}
              status={item.status}
              location={item.location.name}
              img={item.image}
            />
         
            )}
      />
    )}  


     
    </React.Fragment>
  );
}

export default App;
