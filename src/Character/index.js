import React from "react";
import "./Personaje.css"
import { CharacterDetail } from "../CharacterDetail";
import { BsFillCircleFill } from "react-icons/bs";

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
                    <BsFillCircleFill
                    className={`status__icon && ${props.status==='unknown' && "status__icon-unknown"} || ${props.status==='Dead' && "status__icon-dead"}`}
                    />
                
                
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