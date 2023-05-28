

import {Personaje} from "./Character"
import './App.css';
import { ListaPersonajes } from './CharacterList';
import { SearchBar } from './SearchBar';
import { Selector } from './Selector';
import React from "react";
import { useFetch } from "./useFetch";
import { Pagination } from "./Pagination/Pagination";
import { Episode } from "./Episode";



function App() {

  const {
    selectedValue,
    setSelectedValue,
    // personajes,
    prevPage,
    nextPage,
    fetchCharacters,
    setSearchValue,
    searchedCharacters,
    episodes,
    fetchEpisodes
  } = useFetch();
  
  return (
    <React.Fragment>

      
      <Selector
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      />

{selectedValue==='character' && (
      <SearchBar
      setSearchValue={setSearchValue}
      />
)
}
    <Pagination 
     prevPage={prevPage}
     nextPage={nextPage}
     selectedValue={selectedValue}
     fetchCharacters={fetchCharacters}
     fetchEpisodes={fetchEpisodes}
    />
    
    {selectedValue==='character' && (
      <ListaPersonajes
      searchedCharacters={searchedCharacters}
      // render props
        render = {item => (
            <Personaje
              key={item.id}
              name={item.name}
              species={item.species}
              status={item.status}
              location={item.location.name}
              img={item.image}
            />
         
            )}
      />
    )}  

    {selectedValue==='episode' && (
      <Episode 
      episodes={episodes}
      />

    )}
          
    <Pagination 
     prevPage={prevPage}
     nextPage={nextPage}
     selectedValue={selectedValue}
     fetchCharacters={fetchCharacters}
     fetchEpisodes={fetchEpisodes}
    />

     
    </React.Fragment>
  );
}

export default App;
