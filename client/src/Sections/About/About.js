import React, { useState } from "react";
import "./Style.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

//images

const override = css`
  display: block;
  margin-left: 10px;
`;
export function AboutMe() {
  const [loadingImg, setLoadingImage] = useState(true);

  return (
    <div className="container-fluid flex-fill" id="mainContainer">
      {/* <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="business" value="kin@kinskards.com" />

        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="add" value="1" />

        <input
          type="hidden"
          name="item_name"
          value="Birthday - Cake and Candle"
        />
        <input type="hidden" name="amount" value="3.95" />
        <input type="hidden" name="currency_code" value="USD" />

        <input
          type="image"
          name="submit"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          alt="Add to Cart"
        />
        <img
          alt=""
          width="1"
          height="1"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        />
      </form> */}
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
        <div className="col-md-12" id="logoContainer">
          <img
            alt="headerImage"
            src={process.env.PUBLIC_URL + "/images/logo_large.jpg"}
            style={{ display: loadingImg ? "none" : "" }}
            onLoad={() => {
              setLoadingImage(false);
            }}
          />
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
                Helping the world become a fitter place! I offer "in person
                training" and "online training". Currently living in Austin TX,
                I've been personal training since 2017. My workout style
                includes strength training, muscle endurance training and high
                intensity training. Health and fitness is my passion and I enjoy
                helping others become best versions of themselves through
                fitness!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div id="aboutImageContainer">
            <img
              alt="headerImage"
              src={process.env.PUBLIC_URL + "/images/keke.jpeg"}
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
