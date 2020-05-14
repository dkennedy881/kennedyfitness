import React from "react";

import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Kennedy Fitness</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}
