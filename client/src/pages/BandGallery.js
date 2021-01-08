

//FUTURE DEVELOPMENT


import React from "react";

import BandJumbotron from "../components/BandJumbotron";
import GalleryImg from "../components/GalleryImg";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";


export default function BandGallery() {
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
                    <Col md={12}>
                        <div className="d-flex align-items-center justify-content-center">
                            <GalleryImg />
                            <GalleryImg />
                            <GalleryImg />
                            <GalleryImg />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}