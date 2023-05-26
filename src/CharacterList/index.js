import React from "react";
import "./ListaPersonajes.css"

function ListaPersonajes(props){
    return(
        <section className="section__listaPersonajes">
            <ul>
                 {props.searchedCharacters?.map(props.render)}
            </ul>
        </section>
    )
}

export {ListaPersonajes};