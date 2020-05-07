import React from "react";
import Container from "../Container";
import SearchForm from "../SearchForm";

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <Container>
                <h1> Employee Management</h1>
                <SearchForm name="Employees" type="name"/>
            </Container>
        </div>
    )
}

export default Jumbotron;