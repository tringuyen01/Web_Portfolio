import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" variant="white" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">NDT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">SKILLS & PROJECTS</Nav.Link>
            <Nav.Link href="/">CONTACT</Nav.Link>
            <Nav.Link href="/admin">ADMIN PAGE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
