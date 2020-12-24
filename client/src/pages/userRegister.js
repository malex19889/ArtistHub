import React, { useState } from "react";
import Navibar from "../components/Navibar";
import Footer from "../components/Footer";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import API from "../utils/API";


export default function UserRegister() {

    const [registerFirstname, setRegisterFirstname] = useState("");
    const [registerLastname, setRegisterLastname] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const user = {
        firstName: registerFirstname,
        lastName: registerLastname,
        userName: registerUsername,
        email: registerEmail,
        password: registerPassword
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
                            <Button variant="primary" type="submit">
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