import React from "react";
import { Navbar, Nav, Form, Col, Row, Button } from "react-bootstrap";
import "./Style.css";
export default function Footer() {
  return (
    <React.Fragment>
      <div className="footerContainer">
        <Form id="formContainer">
          <Form.Group as={Row}>
            <Col sm="12" id="footerFormMessageContainer">
              <p>
                Submit your email to get the fitness plans you see here and
                future updates.
              </p>
            </Col>
            <Col sm="12" id="formEmailContainer">
              <Form.Control
                id="footerEmail"
                placeholder="youremail@gmail.com"
              />
              <Button variant="secondary" id="footerBtn">
                Git Fit
              </Button>
            </Col>
            <Col sm="12" id="iconRow">
              <i className="footerIcon footerIconBg fab fa-instagram"></i>
              <i className="footerIcon fab fa-youtube"></i>
            </Col>
          </Form.Group>
        </Form>
      </div>
      {/* <Navbar bg="dark" variant="dark" sticky="bottom">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar> */}
    </React.Fragment>
  );
}
