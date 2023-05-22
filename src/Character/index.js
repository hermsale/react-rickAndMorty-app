import React from "react";
import "./Personaje.css"
import { CharacterDetail } from "../CharacterDetail";

function Personaje (props){

    const [openCharacterDetail, setOpenCharacterDetail] = React.useState('')

    const onOpenCharacter = () => {
        setOpenCharacterDetail(prevState => !prevState)
        
    }

    return (
        
        <React.Fragment>
            <li className="li__container"
                onClick={() => onOpenCharacter()}
            >
                <img src={props.img} alt={props.name} />
                <span>{props.name}</span>
            </li>
            
            {!!openCharacterDetail && (
                <CharacterDetail
                    name={props.name}
                    img={props.img}
                    species={props.species}
                    status={props.status}
                    location={props.location}
                    setOpenCharacterDetail={setOpenCharacterDetail}
                />
            )}
        </React.Fragment>


    )
}

export {Personaje}