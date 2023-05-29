import React, { useEffect } from "react";
import axios from "axios";


function useFetch(){

    const urlCharacter =  'https://rickandmortyapi.com/api/character';
    const urlEpisodes = 'https://rickandmortyapi.com/api/episode';


  // estado para controlar la seleccion
  const [selectedValue, setSelectedValue] = React.useState('character');
  const [personajes, setPersonajes ] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);

  // estados de carga ///////////////////////////////////////////////////////////
  const [ loading, setLoading ] = React.useState(true);
  const [ error, setError ] = React.useState(false)

  // guardamos la informacion de la url page next y previous
  const [page, setPage] = React.useState({});

  // barra de busqueda de personajes /////////////////////////////
  const [searchValue, setSearchValue] = React.useState('');  

  // guardamos la informacion de la url page next y previous
  const prevPage = page.prev;
  const nextPage = page.next;

// funcion que hace los llamados de character y paginacion
  async function fetchCharacters(url){

       await axios.get(url).then((response) => {
        console.log('response ',response.request.onload);
        setTimeout(() =>{
          // guardamos el objeto que tiene la pagina previa y la siguiente 
          setPage(response.data.info);
          setPersonajes(response.data.results);
          setError(false);
          setLoading(response.request.onload);
        },1000)
      }).catch(error =>{
        console.log('El error fue ',error);
        setError(true);
        setLoading(false);
      });
  }
  


  // funcion que hace los llamados de character y paginacion
  const fetchEpisodes = (url) => {
    axios.get(url).then((response) => {
        setEpisodes(response.data.results);
        // guardamos el objeto que tiene la pagina previa y la siguiente 
        setPage(response.data.info);
        // console.log(response.data.results)
        setLoading(false);
    });
  }


  useEffect(() => {
 
    if(selectedValue === 'character'){
      fetchCharacters(urlCharacter)
    }else if(selectedValue === 'episode'){
      fetchEpisodes(urlEpisodes)
    }
  }, [selectedValue]);

  // funcion para filtrar las busquedas por nombre de personaje ///////////////////////////////////////////////////////

  // creamos un array vacio, que almacenara las coincidencias
  let searchedCharacters = [];

  // esta variable searchedCharacters es la que mostrará todos los personajes en pantalla 
  // si no hay nada escrito en el buscador, mostramos todos los personajes
  if(!searchValue.length>=1){
    searchedCharacters = personajes;
  }else{
    // guardamos en searchedCharacters las coincidencias del filter 
    searchedCharacters = personajes.filter(personaje =>{
      // los campos de busqueda como de nombres de personajes, los pasamos a minuscula, para que no haya error en la coincidencia de datos
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
        searchedCharacters,
        episodes,
        fetchEpisodes,
        loading,
        error
    }
}

export {useFetch}