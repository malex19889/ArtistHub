import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import BioCard from "../components/BioCard";
import BandGroup from "../components/BandGroup";
import Logout from "../components/LogoutBtn";
import Navibar from '../components/Navibar';
import ModalA from "../components/Modal";
import useModal from "../hooks/useModal";
import Login from "../components/Login";
import Register from "../components/Register";
// global auth context
import { useAuthContext } from "../store/contexts/authContext"
import API from "../utils/API";

export default function Home() {
    const { isShown, toggle } = useModal();
    const [authState, dispatch] = useAuthContext();
    const [bands, setBands] = useState([]);

    useEffect(() => {
        API.bands()
            .then(res => {
                console.log("effect log", res.data)
                setBands(res.data)
            })
    }, []);

    //no login render
    if (!authState.loggedIn) {
        return (
            <div>
                <Navibar>
                    <ModalA
                        onClick={toggle}
                        isShown={isShown}
                        hide={toggle}
                        loginRegister="Login">
                        <h2>Login</h2>
                        <Login></Login>
                    </ModalA>

                    <ModalA
                        onClick={toggle}
                        isShown={isShown}
                        hide={toggle}
                        loginRegister="Register">
                        <h2>Register</h2>
                        <Register></Register>
                    </ModalA>
                </Navibar>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <BioCard />
                        </Col>
                        <Col md={8}>
                            <BandGroup bands={bands} />
                        </Col>
                    </Row>
                </Container>

            </div>

        )
        //bandUser render
        // ANOTHER ELSE NEEDED: if authState.id = session's id, render page
    } else if (authState.loggedIn && authState.isBand) {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/home/" + authState.id}>My Band</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/settings/" + authState.id}>Settings</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Logout>Logout</Logout>
                    </Nav.Item>
                </Navibar>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <BioCard />
                        </Col>
                        <Col md={8}>
                            <BandGroup bands={bands} />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
        //user render
    } else return (
        <div>
            <Navibar>
                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href={"/user/favorites/" + authState.id}>Favorites</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link style={{ color: "white" }} href={"/user/settings/" + authState.id}>Settings</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Logout>Logout</Logout>
                </Nav.Item>
            </Navibar>
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <BioCard />
                    </Col>
                    <Col md={8}>
                        <BandGroup bands={bands} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}