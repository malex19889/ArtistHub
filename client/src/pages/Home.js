import React from "react";
import Jumbotron from "../components/Jumbotron";
import BioCard from "../components/BioCard";
import ArtistCard from "../components/ArtistCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    return (
        <div>
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <BioCard />
                    </Col>
                    <Col md={8}>
                        <ArtistCard />
                    </Col>
                </Row>

                {/* need backend code to display last 3 band pages created */}

            </Container>
        </div>

    )
}