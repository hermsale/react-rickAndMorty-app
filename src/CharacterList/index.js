import React from "react";
import "./ListaPersonajes.css"

function ListaPersonajes(props){
    return(
        <React.Fragment>
            {console.log('estado de loading ', props.loading)}
            {console.log('el estado de error ', props.error)}
            {props.loading && props.onLoading()}
            {props.error && props.onError()}
        <section className="section__listaPersonajes">
            <ul>
                {(!props.loading) && (!props.error) && (
                    props.searchedCharacters?.map(props.render)
                )
                }
            </ul>
        </section>
        </React.Fragment>
    )
}

export {ListaPersonajes};