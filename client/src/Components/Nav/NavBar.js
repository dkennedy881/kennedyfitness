import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./Style.css";

const NavBar = ({ location }) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Nav
        className="justify-content-center defautFont"
        style={{ width: "100%" }}
      >
        <Link
          to={""}
          className={location.pathname === "" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
        <Link
          to={"/pricing"}
          className={
            location.pathname === "/pricing" ? "nav-link active" : "nav-link"
          }
        >
          Pricing
        </Link>
        <Link
          to={"/scheduling"}
          className={
            location.pathname === "/scheduling" ? "nav-link active" : "nav-link"
          }
        >
          Book Your Workout
        </Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavBar);
