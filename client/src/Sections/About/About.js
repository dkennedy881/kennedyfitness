import React from "react";
import "./Style.css";

//images
import runningLady from "../../Images/keke.png";

export function AboutMe() {
  return (
    <div className="container-fluid flex-fill" id="mainContainer">
      <div className="row">
        <div className="col-md-12" id="mainMessageContainer">
          <span id="mainMessage1">Train With Me</span>
          <span id="mainMessage2">Kennedy FITNESS</span>
        </div>
        <span id="siteseal">
          <script
            async
            type="text/javascript"
            src="https://seal.godaddy.com/getSeal?sealID=HmQqyAxzwbIjebBBSPkpJdHxGOFzFFW2neIiuGDhu2TKPxEFIVX6u9ljyIh5"
          ></script>
        </span>
      </div>
      <div className="row" id="reverse">
        <div className="col-md-7">
          <div id="abouMessageContainer">
            <div id="abouMessageHeaderContainer">
              <p id="abouMessageHeader">About Your Trainer</p>
            </div>

            <div id="abouMessageParagraphContainer">
              <p id="abouMessageParagraph">
                I love fitness....It's what makes me feel good inside and out.
                There's ALWAYS something I can work on or get better at. Pushing
                myself physically is what I chase because it reminds me that
                pain is temporary, and my hard work will pay off. Fitness
                improves and trains my mental strength.
                <br />
                <br /> When I want to quit, I find my inner strength to keep
                going because LIFE, is much harder then workouts. Let's get
                Training!
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
