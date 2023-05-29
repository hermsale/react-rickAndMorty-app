import React from "react";
import "./CharacterDetail.css"

function CharacterDetail(props){

    React.useContext();

    const onCancel = () =>{

        props.setOpenCharacterDetail(prevState => !prevState);
    }

    return(
        <React.Fragment>
            <div className="div__characterDetail">
                <h1>{props.name}</h1>
                    <img src={props.img} alt={props.name} />
                    <span className="span_specie">Specie: {props.species}</span>
                    <span>Status: {props.status} </span>
                    <span>Location: {props.location}</span>
                <button 
                    className="btn-cancel"
                    onClick={() => onCancel()}
                >Cancelar</button>
            </div>
        </React.Fragment>
    );
}

export {CharacterDetail};