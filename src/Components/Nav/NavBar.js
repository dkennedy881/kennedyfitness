import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./Style.css";

const NavBar = ({ location }) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Nav className="justify-content-center" style={{ width: "100%" }}>
        <Link
          to={"/kennedyfitness"}
          className={
            location.pathname === "/kennedyfitness"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
        <Link
          to={"/kennedyfitness/pricing"}
          className={
            location.pathname === "/kennedyfitness/pricing"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Pricing
        </Link>
        <Link
          to={"/kennedyfitness/scheduling"}
          className={
            location.pathname === "/kennedyfitness/scheduling"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Book Your Workout
        </Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavBar);
