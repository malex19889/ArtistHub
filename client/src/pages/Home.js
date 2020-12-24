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

export default function Home() {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = {
        userName: username,
        password: password
    }

    const handleLoginModal = () => {
        setLoginModalIsOpen(!loginModalIsOpen)
    }
    const handleRegisterModal = () => {
        setRegisterModalIsOpen(!registerModalIsOpen)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        API.userLogin(userLogin)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        console.log("Login");
        console.log(userLogin);


    }

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case "userName":
                setUsername(event.target.value)
                return;
            case "password":
                setPassword(event.target.value)
                return;
            default:
                break;
        }
    }

    return (
        <div>
            <Navibar handleLoginModal={handleLoginModal} handleRegisterModal={handleRegisterModal} />
            <LoginModal open={loginModalIsOpen} handleInputChange={handleInputChange} handleLoginModal={handleLoginModal} handleSubmit={handleLogin} />
            <RegisterModal open={registerModalIsOpen} handleRegisterModal={handleRegisterModal} />
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