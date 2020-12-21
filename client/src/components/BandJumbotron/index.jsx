import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function JumbotronPage() {
    return (
        <Jumbotron fluid className="jumbo">
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="jumbohead">Band Name</h1>
                <p className="jumbop">
                    Genre goes here.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default JumbotronPage;
