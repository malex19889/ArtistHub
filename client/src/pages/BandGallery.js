import React from "react";

import BandJumbotron from "../components/BandJumbotron";
import GalleryImg from "../components/GalleryImg";
import Navibar from "../components/Navibar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function BandGallery() {
    return (
        <div>
            <Navibar />
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