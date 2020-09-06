import React from "react";
import "./Style.css";

//images
import runningLady from "../../Images/runninglady.png";

export function AboutMe() {
  return (
    <div className="container-fluid flex-fill" id="mainContainer">
      <div className="row">
        <div className="col-md-12" id="mainMessageContainer">
          <span id="mainMessage1">Train With Me</span>
          <span id="mainMessage2">Kennedy FITNESS</span>
        </div>
      </div>
      <div className="row" id="reverse">
        <div className="col-md-7">
          <div id="abouMessageContainer">
            <div id="abouMessageHeaderContainer">
              <p id="abouMessageHeader">About Your Trainer</p>
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
          </div>
        </div>
        <div className="col-md-5">
          <div id="aboutImageContainer">
            <img alt="headerImage" src={runningLady} id="aboutImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
