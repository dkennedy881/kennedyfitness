import React from "react";
import "./Style.css";

import { Card, Button } from "react-bootstrap";

export function PricingV1() {
  return (
    <div className="container">
      <div className="cardRowR">
        <Card className="card">
          <Card.Header>Simple Shredding Package</Card.Header>
          <Card.Body>
            <Card.Title>{"light"} This is the gist of the working </Card.Title>
            <Card.Text>
              here is some more detail
              <br />
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cardBtnContainer">
              <p className="cardPrice">$100 - </p>
              <Button variant="warning">Get Started</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="cardRowL">
        <Card className="card">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{"light"} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cardUL">
              <ul>
                <li>some work</li>
                <li>another workout you could do</li>
                <li>Hey look one more</li>
              </ul>
            </div>
            <div className="cardBtnContainer">
              <p className="cardPrice">$200 - </p>
              <Button variant="warning">Get Started</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="cardRowR">
        <Card className="card">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{"light"} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cardBtnContainer">
              <p className="cardPrice">$300 - </p>
              <Button variant="warning">Get Started</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="cardRowL">
        <Card className="card">
          <Card.Header variant="warning">Header</Card.Header>
          <Card.Body>
            <Card.Title>{"light"} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cardUL">
              <ul>
                <li>some work</li>
                <li>another workout you could do</li>
                <li>Hey look one more</li>
              </ul>
            </div>
            <div className="cardBtnContainer">
              <p className="cardPrice">$400 - </p>
              <Button variant="warning">Get Started</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
