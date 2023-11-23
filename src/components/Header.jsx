import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar fixed='top' className="navbar navbar-expand-lg  bg-transparent ">
        <Container className='ms-4 ps-0'>
          <Navbar.Brand className='fw-bolder fs-2' style={{color:'#d292ff'}}>Chatify</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
