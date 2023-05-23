import React from "react";
import "./SearchBar.css"

function SearchBar(){

    // const [searchValue, setSearchValue] = React.useState('');  

    return( 
            <input type="text" className="input__searchBar" placeholder="Buscar..."/>
    )
}

export {SearchBar} 