import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Modalprofile({user, children}) {
    const [modalShow, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

  return (
    <>
    <Modal show={modalShow} onHide={handleModalClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className="btn" variant="secondary" onClick={handleModalClose}>
            Close
          </button>
          <button className="btn" variant="primary" onClick={handleModalClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Modalprofile