import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BioCard from "../components/BioCard";
import ArtistCard from "../components/ArtistCard";
import Col from "react-bootstrap/Col";
import Navibar from '../components/Navibar';
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
// global auth context
import {useAuthContext} from "../store/contexts/authContext"
export default function Home() {
    const [authState, dispatch] = useAuthContext()

    return (
        <div>
            <Navibar>
                <ModalA
                    loginRegister="Login">
                    <h2>Login</h2>
                    <Login></Login>
                </ModalA>

                <ModalA
                loginRegister="Register">
                    <h2>Register</h2>
                    <Register></Register>
                </ModalA>
            </Navibar>

            {/* <LoginModal open={loginModalIsOpen} handleInputChange={handleInputChange} handleLoginModal={handleLoginModal} handleSubmit={handleLogin} />
            <RegisterModal open={registerModalIsOpen} handleRegisterModal={handleRegisterModal} /> */}
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