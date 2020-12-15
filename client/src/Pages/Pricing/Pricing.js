import React from "react";
import "./Style.css";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

export default function Pricing() {
  const history = useHistory();

  return (
    <div className="flex-fill" id="mainContainer">
      <div className="container headerContainer">
        <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center">
            <p className="pageTitle">Pricing</p>
          </div>
          {/* <div className="col-md-7 d-flex flex-column justify-content-center text-center">
            <p className="pageMessage"> </p>
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row priceSection">
          <div className="col-md-12 ">
            <p className="priceSectionTitle pageSubTitle"> </p>
          </div>
          <div className="col-sm-6 col-md-12">
            <div className="priceCard">
              <div
                className="shadow"
                style={{
                  borderRadius: "0px",
                  border: ".5px rgba(0,0,0,.15) solid",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center defautFont">
                    Monthly
                  </Card.Title>
                  <Card.Text className="text-center">
                    Your monthly option, meaning we workout on set days and
                    times of the week each month.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="text-center defautFont">
                      1 TIME A WEEK $260 A MONTH
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      2 TIMES A WEEK $520 A MONTH
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      3 TIMES A WEEK $780 A MONTH
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      4 TIMES A WEEK $1040 A MONTH
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button
                  className="defautFont"
                  style={{ width: "100%", borderRadius: "0px" }}
                  variant="warning cardFooterBtn"
                  onClick={() => {
                    history.push("/scheduling");
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-12 leftSide">
            <div className="priceCard">
              <div
                className="shadow"
                style={{
                  borderRadius: "0px",
                  border: ".5px rgba(0,0,0,.15) solid",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center defautFont">
                    Pay in full
                  </Card.Title>
                  <Card.Text className="text-center">
                    This is your one time buy option, use your training sessions
                    however you'd like.
                  </Card.Text>
                  <Card.Text
                    style={{ color: "#555" }}
                    className="text-center defautFont"
                  >
                    For example, you purchase "10 workouts," we workout 2 days a
                    week for 5 weeks. (2 x 5 = 10) Or 1 time a week for 10 weeks
                    ext.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="text-center defautFont">
                      5 WORKOUTS $325
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      1O WORKOUTS $650
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      12 WORKOUTS $780
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      15 WORKOUTS $975
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center defautFont">
                      20 WORKOUTS $1300
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Button
                  style={{ width: "100%", borderRadius: "0px" }}
                  className="defautFont"
                  variant="warning cardFooterBtn"
                  onClick={() => {
                    history.push("/scheduling");
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-6 col-md-12">
            <div className="priceCard">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Group Session</Card.Title>
                  <Card.Text className="text-center">
                    This is info about how fun the group workouts are and what
                    you all will be doing.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>$10 per person.</ListGroup.Item>
                    <ListGroup.Item>Up to 10 people per session</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Button
                  variant="warning cardFooterBtn"
                  onClick={() => {
                    history.push("/scheduling");
                  }}
                >
                  Book Now
                </Button>
              </Card>
            </div>
          </div> */}
          <div className="col-sm-6 col-md-12 leftSide"></div>
        </div>

        <div className="row priceSection" style={{ display: "none" }}>
          <div className="col-md-12">
            <p className="priceSectionTitle pageSubTitle defautFont">
              Virtural
            </p>
          </div>
          <div className="col-sm-6 col-md-12">
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
                <Button variant="warning cardFooterBtn">
                  <Link to={"/scheduling"}>Book Now</Link>
                </Button>
              </Card>
            </div>
          </div>
          <div className="col-sm-6 col-md-12">
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
                <Button variant="warning cardFooterBtn">
                  <Link to={"/scheduling"}>Book Now</Link>
                </Button>
              </Card>
            </div>
          </div>
          <div className="col-sm-6 col-md-12"></div>
        </div>
      </div>
    </div>
  );
}
