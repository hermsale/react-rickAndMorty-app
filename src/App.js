

import {Personaje} from "./Character"
import './App.css';
import { ListaPersonajes } from './CharacterList';
import { SearchBar } from './SearchBar';
import { Selector } from './Selector';
import React from "react";
import { useFetch } from "./useFetch";
import { Pagination } from "./Pagination/Pagination";



function App() {

  const {
    selectedValue,
    setSelectedValue,
    // personajes,
    prevPage,
    nextPage,
    fetchCharacters,
    setSearchValue,
    searchedCharacters
  } = useFetch();
  
  return (
    <React.Fragment>

      
      <Selector
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      />

      <SearchBar
      setSearchValue={setSearchValue}
      />

    <Pagination 
     prevPage={prevPage}
     nextPage={nextPage}
     fetchCharacters={fetchCharacters}
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

          
    <Pagination 
     prevPage={prevPage}
     nextPage={nextPage}
     fetchCharacters={fetchCharacters}
    />

     
    </React.Fragment>
  );
}

export default App;
