import React, { useState } from "react";
import "./Style.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

//images
import runningLady from "../../Images/keke.jpeg";

const override = css`
  display: block;
  margin-left: 10px;
`;
export function AboutMe() {
  const [loadingImg, setLoadingImage] = useState(true);

  return (
    <div className="container-fluid flex-fill" id="mainContainer">
      {loadingImg ? (
        <div
          className="sweet-loading container-fluid flex-fill"
          id="mainContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClipLoader css={override} size={50} color={"#ffc107"} />
          <div
            className="col-md-12"
            style={{
              marginTop: "70px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p className="formSectionTitle"></p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        className="row fadeIt"
        style={
          loadingImg
            ? { visibility: "hidden", opacity: 0 }
            : { visibility: "visible", opacity: 1 }
        }
      >
        <div className="col-md-12" id="mainMessageContainer">
          <span id="mainMessage1">Train With Me</span>
          <span id="mainMessage2">Kennedy FITNESS</span>
        </div>
      </div>
      <div
        className="row fadeIt"
        id="reverse"
        style={
          loadingImg
            ? { visibility: "hidden", opacity: 0 }
            : { visibility: "visible", opacity: 1 }
        }
      >
        <div className="col-md-7">
          <div id="abouMessageContainer">
            <div id="abouMessageHeaderContainer">
              <p id="abouMessageHeader"> </p>
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
            <img
              alt="headerImage"
              src={runningLady}
              id="aboutImage"
              style={{ display: loadingImg ? "none" : "" }}
              onLoad={() => {
                setLoadingImage(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
