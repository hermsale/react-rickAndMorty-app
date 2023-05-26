import React from "react";
import "./SearchBar.css"

function SearchBar({ setSearchValue }) {


    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input type="text" className="input__searchBar" placeholder="Buscar..." onChange={onSearchValue} />
    )
}

export { SearchBar } 