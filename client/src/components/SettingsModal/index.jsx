import React from 'react'
import useModal from "../../hooks/useModal";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

const SettingsModal = (props) => {
  const {show, toggle} = useModal();

  return (
    <>
      <Button variant="dark" onClick={() => toggle(true)}>
        {props.option}
          </Button>

      <Modal show={show} onHide={() => toggle(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}


export default SettingsModal;
