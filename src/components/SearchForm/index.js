import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
            <label htmlFor="search">Search {props.name}</label>
            <br/>
            <input type="search" id="search" placeholder={"Search by "+props.type}/>
            </div>
        </form>
    )
}

export default SearchForm;