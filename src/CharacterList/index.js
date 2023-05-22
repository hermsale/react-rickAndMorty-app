import React from "react";
import "./ListaPersonajes.css"

function ListaPersonajes(props){
    return(
        <section className="section__listaPersonajes">
            <ul>
                 {props.personajes?.map(props.render)}
            </ul>
        </section>
    )
}

export {ListaPersonajes};