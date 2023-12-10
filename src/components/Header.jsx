import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Header() {
  const [loginShow, setloginShow] = useState(false);
  const [signinShow, setSigninShow] = useState(false);

  const handleClose = () => {
    setSigninShow(false);
    setloginShow(false);
  };

  const logIn = () => setloginShow(true);
  const signIn = () => setSigninShow(true);

  return (
    <>
      <Navbar
        className=''
        style={{ backgroundColor: "transparent" }}
        collapseOnSelect
        expand="lg"
      >
        <div className='mx-lg-5 mt-3 container-fluid'>
          <Navbar.Brand className="fw-bolder fs-2" style={{ color: "#9439ef" }}>
            <img
              alt=""
              src="/images/icon.png"
              width="40"
              height="40"
              className="d-inline-block align-top me-1"
            />
            Chatify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <button onClick={logIn} className="btn mt-3 mt-lg-0 btn-light  rounded-pill px-5 ms-4 mb-3 ">Login</button>
              <button onClick={signIn} className="btn  shadow rounded-pill px-4 ms-4 mb-3" style={{ backgroundColor: "#9439ef", color: 'white', border: 'none' }}>Get Started</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Modal
        show={loginShow}
        onHide={handleClose}
        centered
      >
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
      <Modal
        
        show={signinShow}
        onHide={handleClose}
        centered
      >
        <Modal.Body>
          <Signup />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
