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
                <h1 className="jumbohead">Welcome to ArtistHub!</h1>
                <p className="jumbop">
                    Keep track of tour dates, band merchandise, and more.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default JumbotronPage;
