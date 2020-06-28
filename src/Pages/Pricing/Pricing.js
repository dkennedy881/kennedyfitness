import React from "react";
import "./Style.css";

import { Card, Button, ListGroup } from "react-bootstrap";

export default function Pricing() {
  return (
    <div className="flex-fill" id="mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="pageTitle">Pricing</p>
          </div>
          <div className="col-md-8">
            <p className="pageMessage">
              This is what the pricing is about yadata yada yada. There is
              something for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row priceSection">
          <div className="col-md-12">
            <p className="priceSectionTitle pageSubTitle">In Person</p>
          </div>
          <div className="col-md-6">
            <div className="priceCard">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Individual</Card.Title>
                  <Card.Text className="text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button variant="warning cardFooterBtn">Book Now</Button>
              </Card>
            </div>
          </div>
          <div className="col-md-6">
            <div className="priceCard">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Individual</Card.Title>
                  <Card.Text className="text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button variant="warning cardFooterBtn">Book Now</Button>
              </Card>
            </div>
          </div>
        </div>
        <div className="row priceSection">
          <div className="col-md-12">
            <p className="priceSectionTitle pageSubTitle">Virtural</p>
          </div>
          <div className="col-md-6">
            <div className="priceCard">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Individual</Card.Title>
                  <Card.Text className="text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button variant="warning cardFooterBtn">Book Now</Button>
              </Card>
            </div>
          </div>
          <div className="col-md-6">
            <div className="priceCard">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Individual</Card.Title>
                  <Card.Text className="text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button variant="warning cardFooterBtn">Book Now</Button>
              </Card>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
