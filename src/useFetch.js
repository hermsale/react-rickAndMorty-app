import React, { useEffect } from "react";
import axios from "axios";

function useFetch(){

    const urlCharacter =  'https://rickandmortyapi.com/api/character';
 
  // estado para controlar la seleccion
  const [selectedValue, setSelectedValue] = React.useState('character');
  const [personajes, setPersonajes ] = React.useState([]);
  // guardamos la informacion de la url page next y previous
  const [page, setPage] = React.useState({});

  const [searchValue, setSearchValue] = React.useState('');  

  // guardamos la informacion de la url page next y previous
  const prevPage = page.prev;
  const nextPage = page.next;

// funcion que hace los llamados de character y paginacion
  const fetchCharacters = (url) => {
    axios.get(url).then((response) => {
      setPersonajes(response.data.results);
      // guardamos el objeto que tiene la pagina previa y la siguiente 
      setPage(response.data.info);
    });
  }

  useEffect(() => {
    fetchCharacters(urlCharacter)
  }, []);

  // funcion para filtrar las busquedas por nombre de personaje

  let searchedCharacters = [];
  // si no hay nada escrito en el buscador, mostramos todos los personajes
  if(!searchValue.length>=1){
    searchedCharacters = personajes;
  }else{
    searchedCharacters = personajes.filter(personaje =>{
      const nombrePersonaje = personaje.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return nombrePersonaje.includes(searchText);
    })
  }

    return{
        selectedValue,
        setSelectedValue,
        // personajes,
        prevPage,
        nextPage,
        fetchCharacters,
        setSearchValue,
        searchedCharacters
    }
}

export {useFetch}