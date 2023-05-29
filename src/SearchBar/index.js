import React from "react";
import "./SearchBar.css"

function SearchBar({ setSearchValue, loading, error }) {


    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input type="text" className="input__searchBar" placeholder="Buscar personaje" onChange={onSearchValue} disabled={loading || error} />
    )
}

export { SearchBar } 