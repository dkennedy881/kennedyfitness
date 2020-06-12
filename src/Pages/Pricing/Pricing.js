import React from "react";
import "./Style.css";
import image from "../../Images/runninglady.png";

import { Card, Button, ListGroup } from "react-bootstrap";

export function Pricing() {
  return (
    <div className="container-fluid flex-fill" id="mainContainer">
      <div class="row section">
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
      <div class="row priceSection">
        <div className="col-md-12">
          <p className="priceSectionTitle pageSubTitle">In Person</p>
        </div>
        <div className="col-md-6">
          <div className="priceCard">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center">Individual</Card.Title>
                <Card.Text className="text-center">
                  With supporting text below as a natural lead-in to additional
                  content.
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img variant="top" src={image} className="cardImage" />
              </div>
              <Card.Body>
                <Card.Title className="text-center">Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Button variant="primary float-right">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div class="row priceSection">
        <div className="col-md-12">
          <p className="priceSectionTitle pageSubTitle">Virtural</p>
        </div>
        <div className="col-md-6">
          <div className="priceCard">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center">Hybrid</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Button variant="primary float-right">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="col-md-6">
          <div className="priceCard">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center">Online</Card.Title>
                <Card.Text className="text-center">
                  With supporting text below as a natural lead-in to additional
                  content.
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
  );
}
