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
            <button onClick={props.handleLoginModal}>X</button>
            <Container>
            <Row className="justify-content-lg-center">
              <Col style={{ maxWidth: "500px", marginTop: "30px", marginBottom: "30px" }}>
                <Form className="bandregister" onSubmit={props.handleSubmit}>

                  <h1>Login</h1>

                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" name="userName" onChange={event => props.handleInputChange(event)} placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={event => props.handleInputChange(event)} placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
}
