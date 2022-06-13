import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">BETCONX</Navbar.Brand>
            <Nav className="me">
              <Nav.Link className="btn-light" href="#home">
                Documentation
              </Nav.Link>
              <Nav.Link className="btn-light" href="#home">
                API
              </Nav.Link>
              <Nav.Link className="btn-light" href="#features">
                Register
              </Nav.Link>
              <Nav.Link className="btn-light" href="#pricing">
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
