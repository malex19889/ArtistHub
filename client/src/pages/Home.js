import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";

import BioCard from "../components/BioCard";
import ArtistCard from "../components/ArtistCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navibar from '../components/Navibar';
import LoginModal from '../components/LoginModal';
import RegisterModal from "../components/RegisterModal";

import API from "../utils/API";
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Logout from "../components/LogoutBtn"
import { useAuthContext } from "../store/contexts/authContext"
export default function Home() {
    const [authState, dispatch] = useAuthContext()

    return (
        <div>
            <Navibar>
                {authState.loggedIn ? <Logout></Logout> :<ModalA><Login></Login></ModalA>}
            </Navibar>
            
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