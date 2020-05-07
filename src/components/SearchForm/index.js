import React from "react";

function SearchForm(props) {
    return (
        <form>
            <label for="search">Search {props.name}:</label>
            <br />
            <input type="search" id="search" placeholder={"search by "+props.type}/>
        </form>
    )
}

export default SearchForm;