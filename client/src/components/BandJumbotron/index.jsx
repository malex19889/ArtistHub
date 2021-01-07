import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function JumbotronPage(props) {
    return (
        <Jumbotron fluid className="jumbo" style={{backgroundImage: "url(" + props.band.bannerImage + ")"}}>
            {/* you may have to remove the image hardcoded into ./style.css */}
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="jumbohead">{props.band.bandName}</h1>
                <p className="jumbop">
                    {props.band.genre}
                </p>
            </Container>
        </Jumbotron>
    );
}

export default JumbotronPage;
