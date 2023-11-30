import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Modalprofile({user, children}) {
    const [modalShow, setModalShow] = useState(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);
    let storedColor = sessionStorage.getItem('randomColor');
  if (!storedColor) {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    storedColor = colors[Math.floor(Math.random() * colors.length)];
    sessionStorage.setItem('randomColor', storedColor);
  }
  return (
    
    <>
    {children ? (
        <span onClick={handleModalShow}>{children}</span>
      ) : (
        <i className="fa-solid fa-eye" onClick={handleModalShow}></i>
      )}
    <Modal show={modalShow} onHide={handleModalClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center mb-3 justify-content-center">
          <Avatar
            sx={{ width: 100, height: 100  }}
            src={user.pic ? user.pic : null}
          />
          </div>
          <p className="text-center m-0 p-0 fw-bolder">{user.name}</p>
          <p className="text-center p-0 m-0">{user.email}</p>

        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default Modalprofile