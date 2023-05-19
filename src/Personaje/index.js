import React from "react";
import "./Personaje.css"

function Personaje (props){

    return (
        
            <li className="li__container">
                <img src={props.img} alt={props.name} />
                <span>{props.name}</span>
                <span>{props.species}</span>
                <span>{props.status} </span>
                <span>{props.location}</span>
            </li>
    
    )
}

export {Personaje}

// key={index}> {todo.name} {todo.status==='Alive'  ? '✅' : '❌'}
// <img src={todo.image} alt={todo.name}/>