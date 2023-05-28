import React from 'react'
import "./Episode.css"

function Episode(props) {
    return (
        <section className="section__listaPersonajes">
        <ul className='container__card'>
             {props.episodes?.map(
                episode => (
                    <li className='card'
                        key={episode.id}
                    >
                        <span className='span'>Número de episodio:{episode.id}</span>
                        <span className='span'>Título del episodio: {episode.name}</span>
                        <span className='span'>Código del episodio {episode.episode}</span>
                    </li>
             )
             )}
        </ul>
    </section>
    )
}

export {Episode}
