import React from "react";
import "./Error.css"

function Error(){

    return (
        <div className="TodoError_container">
            <p className="TodoError_text">Hubo un error...</p>
            <p className="TodoError_text">Estamos trabajando para solucionarlo.</p>
        </div>
    )
}

export {Error}; 