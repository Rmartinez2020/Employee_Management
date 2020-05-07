import React from "react";
import Container from "../Container";


function Jumbotron(props) {
    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <Container>
            {props.children}
            </Container>
        </div>
    )
}

export default Jumbotron;