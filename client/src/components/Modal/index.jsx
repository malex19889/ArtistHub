import React from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

const ModalA = (props) => props.isShown ? ReactDOM.createPortal(
    <div>
      <Button variant="outline-none" style={{ backgroundColor: "#343a40", color: "white" }}>
        {props.loginRegister}
          </Button>

      <Modal >
        <Modal.Header closeButton onClick={props.hide}>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>, document.body
  ) : null;

export default ModalA;