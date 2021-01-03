import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

const ModalA = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-none" style={{ backgroundColor: "#343a40", color: "white" }} onClick={handleShow}>
        {props.loginRegister}
          </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}


export default ModalA
