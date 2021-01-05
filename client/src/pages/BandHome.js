import React from "react";

import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsCard from "../components/EventsCard";
import MerchCard from "../components/MerchCard";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";


export default function BandHome() {
    return (
        <div>
            <Navibar>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/band/home">My Band</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href="/band/settings">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>

            <BandJumbotron />
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <BandBioCard />
                    </Col>
                    <Col sm={8}>
                        <EventsCard />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex align-items-center justify-content-center">
                        <MerchCard />
                        <MerchCard />
                        <MerchCard />
                        <MerchCard />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}