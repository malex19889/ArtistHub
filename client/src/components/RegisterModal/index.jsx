import React from 'react'

// import Form from "react-bootstrap/Form";
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

          </Col>
        </Row>
        <Button type="button" href="/band/register">Band Registration</Button>
      </Container>
    </div>
  </div>
}
