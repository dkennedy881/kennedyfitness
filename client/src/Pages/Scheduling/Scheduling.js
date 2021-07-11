import React, { Component } from "react";
import "./Style.css";
import Axios from "axios";

import SchedulingForm from "./SchedulingForm";
import { Questionnaire } from "../../Components/Questionnaire";

class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendEmail = async ([email, subject, messageBody]) => {
    try {
      let { data } = await Axios.post(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/emailkierra/incoming_webhook/webhook0",
        {
          email,
          subject,
          messageBody,
        }
      );
      return data;
    } catch (e) {
      alert("An Error has occured");
      console.log(`Error - ${e}`);
    }
  };

  render() {
    return (
      <div className="container flex-fill alt" id="mainContainer">
        <div className="row headerContainer">
          <div className="col-md-12">
            <p className="pageTitle">Book your workout</p>
            <p className="text-center pt-3">
              Complete the questionnaire to get a workout tailor made for you
            </p>
          </div>
          {/* <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <p className="pageMessage"> </p>
          </div> */}
        </div>
        <div className="col-md-12">
          <hr />
        </div>
        <div className="container">
          <Questionnaire sendEmail={this.sendEmail} />
        </div>
      </div>
    );
  }
}

export default Scheduling;
