import React from 'react'
import useModal from "../../hooks/useModal";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

const ModalA = (props) => {
  const {show, toggle} = useModal();

  return (
    <>
      <Button variant="outline-none" style={{ backgroundColor: "#343a40", color: "white" }} onClick={() => toggle(true)}>
        {props.loginRegister}
          </Button>

      <Modal show={show} onHide={() => toggle(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}


export default ModalA;
