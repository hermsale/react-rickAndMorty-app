import React from 'react'
import "./Pagination.css"

function Pagination({ prevPage, nextPage, fetchCharacters, selectedValue, fetchEpisodes  }) {

    // pasamos fetchCharacters para que pueda pasar la nueva url de las paginas
    const onPrevius = () => {
        console.log('pagina previa ', prevPage);
        if(selectedValue==='character'){
            fetchCharacters(prevPage);
        }else if(selectedValue==='episode'){
            fetchEpisodes(prevPage)
        }

    }

    const onNext = () => {
        if(selectedValue==='character'){
        console.log('pagina siguiente ', nextPage);
        fetchCharacters(nextPage);
        }else if(selectedValue==='episode'){
            fetchEpisodes(nextPage);
        }

    }

    return (
        <div className="pagination">
            {
                !!prevPage &&
                <button className="previous-page" onClick={onPrevius}>Anterior</button>
            }
            {
                !!nextPage &&
                <button className="next-page" onClick={onNext}>Siguiente</button>
            }
        </div>
    )
}

export { Pagination }
