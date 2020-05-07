import React from 'react';
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1> Employee Management</h1>
        <SearchForm name="Employees" type="name" />
      </Jumbotron>>
    </Container>
  );
}

export default App;
