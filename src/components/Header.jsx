import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar fixed='top' className="navbar navbar-expand-lg navbar-dark bg-transparent ">
        <Container className='ms-4 ps-0'>
          <Navbar.Brand className='fw-bolder text-light fs-2 ' style={{ color: '#000000' }}>Chatify</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
