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
      <div class="row section">
        <div className="col-md-12">
          <p className="priceSectionTitle pageSubTitle">In Person</p>
        </div>
        <div className="priceCards">
          <div className="col-md-6">
            <Card className="priceCard">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="priceCard">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img variant="top" src={image} className="cardImage" />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-md-12">
          <p className="priceSectionTitle pageSubTitle">Virtural</p>
        </div>
        <div className="priceCards">
          <div className="col-md-6">
            <Card className="priceCard">
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="priceCard">
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="priceCards">
          <div className="col-md-6 priceCard">
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
