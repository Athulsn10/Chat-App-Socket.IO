import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'



function Header() {

  return (
    <>
      <Navbar
        fixed="top"
        style={{ backgroundColor: "rgb(0 0 46)" }}
        collapseOnSelect
        expand="lg"
      >
        <div className='ms-4 mt-3 container-fluid'>
          <Navbar.Brand className="fw-bolder  fs-2" style={{ color: "#d292ff" }}>
            Chatify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="ms-auto me-4 ">
              <Link to={"/login"}>
                <button className="btn rounded-pill px-5 ms-4 mb-3 btn-primary">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn px-4 rounded-pill btn-primary ms-4">Get Started</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
