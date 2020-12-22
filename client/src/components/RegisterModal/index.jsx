import React from 'react'

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Modal(props) {
    const style = {
        modal: {
            display: props.open ? "block" : "none",
            position: "fixed",
            zIndex: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        content: {
            backgroundColor: "#fff",
            margin: "15% auto",
            padding: "20px",
            border: "1px solid red",
            width: "80%"
        }
    }
    return <div style={style.modal}>
        <div style={style.content}>
            <button onClick={props.handleRegisterModal}>X</button>
            <Container>
            <h2>Normal user</h2>
            <Row className="justify-content-lg-center">
              <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                <Form className="bandregister">

                  <h1>Register</h1>

                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter First Name" />
                  </Form.Group>

                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter Last Name" />
                  </Form.Group>

                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" href="/band/home/">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
            <Button type="button" href="/band/register">Band Registration</Button>
          </Container>
        </div>
    </div>
}
