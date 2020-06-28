import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Nav className="justify-content-center" style={{ width: "100%" }}>
        <Link to={"/kennedyfitness"}>
          <Nav.Link href="#about">About</Nav.Link>
        </Link>
        <Link to={"/kennedyfitness/pricing"}>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Link>
        <Link to={"/kennedyfitness/scheduling"}>
          <Nav.Link href="#contact">Book Your Workout</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
