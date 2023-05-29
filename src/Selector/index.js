import React from "react";
import "./Selector.css"

function Selector({setSelectedValue, selectedValue, loading, error}){

    
    

    const handleSeleccionChange = (event) => {
        const seleccion = event.target.value;
        setSelectedValue(seleccion);
      };

    console.log('el valor seleccionado es ',selectedValue);
    return(
        <select className="select__bar" value={selectedValue} onChange={handleSeleccionChange}  disabled={loading || error}>
            <option value="character">Personajes</option>
            {/* <option value="location">Ubicaciones</option> */}
            <option value="episode">Episodios</option>
        </select>
    )

    
}

export {Selector}