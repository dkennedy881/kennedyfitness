import React from "react";
import "./About.css";

import { Button, Form, Row, Col } from "react-bootstrap";

//images
import runningLady from "../../Images/runninglady.png";

export function AboutV1() {
  return (
    <div className="container-fluid" id="mainContainer">
      <div className="row">
        <div className="col-md-7">
          <div>
            <img alt="headerImage" src={runningLady} id="aboutImage" />
          </div>
        </div>
        <div className="col-md-5">
          <div id="abouMessageContainer">
            <div id="abouMessageHeaderContainer">
              <p id="abouMessageHeader">Kennedy Fitness</p>
            </div>

            <div id="abouMessageParagraphContainer">
              <p id="abouMessageParagraph">
                Physical fitness is a state of health and well-being and, more
                specifically, the ability to perform aspects of sports,
                occupations and daily activities. Physical fitness is generally
                achieved through proper nutrition, moderate-vigorous physical
                exercise, and sufficient rest.
              </p>
            </div>
            <div id="abouMessageBtnContainer">
              <Button variant="warning">Git Fit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
