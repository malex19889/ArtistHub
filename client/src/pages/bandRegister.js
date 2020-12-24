import React, { useState } from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";

import API from "../utils/API";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function BandRegister() {

    const [registerFirstname, setRegisterFirstname] = useState("");
    const [registerLastname, setRegisterLastname] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerBandname, setRegisterBandname] = useState("");
    const [registerBandBio, setRegisterBandBio] = useState("");
    const [registerGenre, setRegisterGenre] = useState("");
    const [registerContact, setRegisterContact] = useState("");
    const [registerYoutube, setRegisterYoutube] = useState("");
    const [registerFacebook, setRegisterFacebook] = useState("");
    const [registerInsta, setRegisterInsta] = useState("");
    const [registerTwitter, setRegisterTwitter] = useState("");

    const user = {
        firstName: registerFirstname,
        lastName: registerLastname,
        userName: registerUsername,
        email: registerEmail,
        password: registerPassword,
        bandName: registerBandname,
        bandBio: registerBandBio,
        genre: registerGenre,
        contact: registerContact,
        youtube: registerYoutube,
        facebook: registerFacebook,
        insta: registerInsta,
        twitter: registerTwitter
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        API.register(user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navibar />
            <Container>
                <Row className="justify-content-lg-center">
                    <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                        <Form className="bandregister" onSubmit={handleRegisterSubmit}>

                            <h1>Register</h1>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={e => setRegisterFirstname(e.target.value)} type="username" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={e => setRegisterLastname(e.target.value)} type="username" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={e => setRegisterUsername(e.target.value)} type="username" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group controlId="formBandName">
                                <Form.Label>Band Name</Form.Label>
                                <Form.Control onChange={e => setRegisterBandname(e.target.value)} type="bandName" placeholder="Enter Band Name" />
                            </Form.Group>

                            <Form.Group controlId="formBandBio">
                                <Form.Label>Band Biography</Form.Label>
                                <Form.Control onChange={e => setRegisterBandBio(e.target.value)} type="bandBio" placeholder="Enter Band Bio" />
                            </Form.Group>

                            <Form.Group controlId="formGenre">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control onChange={e => setRegisterGenre(e.target.value)} type="genre" placeholder="Genre" />
                            </Form.Group>

                            <Form.Group controlId="contact">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={e => setRegisterContact(e.target.value)} type="contact" placeholder="XXXXXXXXXX" />
                            </Form.Group>

                            <Form.Group controlId="formYoutube">
                                <Form.Label>Youtube Channel</Form.Label>
                                <Form.Control onChange={e => setRegisterYoutube(e.target.value)} type="youtube" placeholder="@VEVO" />
                            </Form.Group>

                            <Form.Group controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control onChange={e => setRegisterFacebook(e.target.value)} type="facebook" placeholder="Enter Facebook Link" />
                            </Form.Group>
                            <Form.Group controlId="insta">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control onChange={e => setRegisterInsta(e.target.value)} type="insta" placeholder="@Whoever" />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control onChange={e => setRegisterTwitter(e.target.value)} type="twitter" placeholder="@Whoever" />
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => setRegisterEmail(e.target.value)} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => setRegisterPassword(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" handleRegisterSubmit={handleRegisterSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}