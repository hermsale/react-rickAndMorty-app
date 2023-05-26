import React from 'react'
import "./Pagination.css"

function Pagination({ prevPage, nextPage, fetchCharacters }) {

    const onPrevius = () => {
        console.log('pagina previa ', prevPage);
        fetchCharacters(prevPage);
    }

    const onNext = () => {
        console.log('pagina siguiente ', nextPage);
        fetchCharacters(nextPage);
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
