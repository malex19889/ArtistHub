import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

//the only way to keep from using props AND state is to create two separate modals, one for register and one for login
//props.loginRegister changes the label on the navbar, and props.children refers to login and register components

const ModalA = (props) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-none" style={{ backgroundColor: "#343a40", color: "white" }} onClick={props.handleShow}>
        {props.loginRegister}
          </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}


export default ModalA;
