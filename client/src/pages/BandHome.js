import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../store/contexts/authContext";

import BandJumbotron from "../components/BandJumbotron";
import BandBioCard from "../components/BandBioCard";
import EventsGroup from "../components/EventsGroup";
import Navibar from "../components/Navibar";
import Logout from "../components/LogoutBtn";
import ContactCard from "../components/ContactCard";
import FavBtn from "../components/FavBtn";
import ModalA from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
import Loading from "../components/Loading";

import useModal from "../hooks/useModal";

import API from "../utils/API";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default function BandHome() {
    const { isShown, toggle } = useModal();

    const [authState, dispatch] = useAuthContext();
    const [band, setBand] = useState({
i
        bandMembers: [],
        tour: []
    });

    console.log(authState)
    let { id } = useParams();

    useEffect(() => {
        console.log(id)
        API.bandInfoById(id)
            .then((res) => {
                setBand(res.data);
            })
            .catch(err => console.log(err));
    }, [id])
    // console.log(band)
    function handleFavorite(band) {
        console.log(authState);
        const obj = { band, authState, url: window.location.href }
        API.saveFavorites(obj)
        .then((res) => {
            console.log(res)
            window.location.href="/user/favorites/" + authState.id
        })
    }
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

                <BandJumbotron band={band} />
                <Container fluid>
                    <Row>
                        <Col lg={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <BandBioCard band={band} />
                        </Col>
                        <Col lg={5} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <EventsGroup band={band} />
                        </Col>
                        <Col lg={4} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <ContactCard band={band} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else if (authState.loggedIn && authState.isBand) {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/home/" + band.id}>My Band</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/merch/" + band.id}>Shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/settings/" + band.id}>Settings</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Logout>Logout</Logout>
                    </Nav.Item>
                </Navibar>

                <BandJumbotron band={band} />
                <Container fluid>
                    <Row>
                        <Col lg={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <BandBioCard band={band} />
                        </Col>
                        <Col lg={5} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <EventsGroup band={band} />
                        </Col>
                        <Col lg={4} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <ContactCard band={band} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div>
                <Navibar>
                    <Nav.Item>
                        <Nav.Link style={{ color: "white" }} href={"/band/merch/" + band.id}>Shop</Nav.Link>
                    </Nav.Item>
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

                <BandJumbotron band={band} />
                <Container fluid>
                    <Row>
                        <Col lg={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <BandBioCard band={band} />
                            <FavBtn handleFavorite={handleFavorite} band={band} />
                        </Col>
                        <Col lg={5} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <EventsGroup band={band} />
                        </Col>
                        <Col lg={4} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <ContactCard band={band} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}