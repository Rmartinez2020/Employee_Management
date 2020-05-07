import React from "react";
import Container from "../Container";
import Jumbotron from "../Jumbotron";
import SearchForm from "../SearchForm";
import Table from "../Table";

class Main extends React.Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1> Employee Management</h1>
                    <SearchForm name="Employees" type="Name" />
                </Jumbotron>>
            </Container>
        )
    }
}

export default Main;