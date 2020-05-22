import React from "react";

import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Nav className="justify-content-center" style={{ width: "100%" }}>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#contact">Book Your Workout</Nav.Link>
      </Nav>
    </Navbar>
  );
}
