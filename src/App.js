

import {Personaje} from "./Character"
import './App.css';
import { ListaPersonajes } from './CharacterList';
import { SearchBar } from './SearchBar';
import { Selector } from './Selector';
import React from "react";
import { useFetch } from "./useFetch";
import { Pagination } from "./Pagination/Pagination";
import { Episode } from "./Episode";
import { Loading } from "./Loading"
import { Error } from "./Error";


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
    fetchEpisodes,
    loading,
    error
  } = useFetch();
  
  return (
    <React.Fragment>

      <Selector
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        loading={loading}
        error={error}
      />

      {selectedValue === 'character' && (
        <SearchBar
          setSearchValue={setSearchValue}
          loading={loading}
          error={error}
        />
      )
      }
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        selectedValue={selectedValue}
        fetchCharacters={fetchCharacters}
        fetchEpisodes={fetchEpisodes}
        error={error}
      />




      {selectedValue === 'character' && (
        <ListaPersonajes

          onLoading={() => <Loading />}
          onError={() => <Error />}

          searchedCharacters={searchedCharacters}
          loading={loading}
          error={error}

          // render props
          render={item => (
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
      )
      }


      {selectedValue === 'episode' && (
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
        error={error}
      />


    </React.Fragment>
  );
}

export default App;
