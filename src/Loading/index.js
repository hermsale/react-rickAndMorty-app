import React from "react";
import "./Loading.css"

function Loading(){

    return (
        <div className="TodoLoading_container">
            <div className="div__container_item">
                <div className="TodoLoading_item" />
                <span className="span__cargando">Cargando...</span>
            </div>
            <div className="div__container_item">
                <div className="TodoLoading_item" />
                <span className="span__cargando">Cargando...</span>
            </div>
            <div className="div__container_item">
                <div className="TodoLoading_item" />
                <span className="span__cargando">Cargando...</span>
            </div>
        </div>
    )
}

export {Loading}; 
