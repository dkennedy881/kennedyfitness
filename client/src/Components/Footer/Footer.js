import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import "./Style.css";
export function Footer() {
  return (
    <React.Fragment>
      <div id="footerContainer">
        <Form id="formContainer">
          <Form.Group as={Row}>
            <Col sm="12" id="footerFormMessageContainer">
              <p>Questions? Contact me at kierra.kennedyfitness@gmail.com</p>
            </Col>
            <Col sm="12" id="iconRow">
              <a
                href="https://www.instagram.com/kennedyfitness/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <i className="footerIcon footerIconBg fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCul0qRQW1O3sQ-63Hb1_4xA/videos"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <i className="footerIcon fab fa-youtube"></i>
              </a>
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
