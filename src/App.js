import React, { useEffect } from 'react';
import axios from "axios";

import {Personaje} from "./Personaje"
import './App.css';
import { ListaPersonajes } from './ListaPersonajes';

function App() {

  const url =  'https://rickandmortyapi.com/api/character';
  // https://jsonplaceholder.typicode.com/posts/1
  // https://rickandmortyapi.com/api/character
  const [post, setPost ] = React.useState('');

  // const fetchApi = async() =>{
  //   const response = await fetch(url);
  //   console.log(response.status);
  //   const responseJSON = await response.json();
  //   setPost(responseJSON);
  // }

  // useEffect(()=>{
  //   fetchApi();
  // },[])

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  console.log('esta es la info ',post.info);

  console.log('esta es los results ',post.results);
  const personajes = post.results;


  return (
    <React.Fragment>
      
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
     
    </React.Fragment>
  );
}

export default App;
