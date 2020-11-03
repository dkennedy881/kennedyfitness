import React, { Component } from "react";
import "./Style.css";
import Axios from "axios";

import SchedulingForm from "./SchedulingForm";

class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendEmail = async ([email, subject, messageBody]) => {
    let { data } = await Axios.post(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/emailkierra/incoming_webhook/webhook0",
      {
        email,
        subject,
        messageBody,
      }
    );
    return data;
  };

  render() {
    return (
      <div className="container flex-fill" id="mainContainer">
        <div className="row headerContainer">
          <div className="col-md-12">
            <p className="pageTitle">Schedule your Personal Training</p>
          </div>
          {/* <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <p className="pageMessage"> </p>
          </div> */}
        </div>
        <div className="col-md-12">
          <hr />
        </div>
        <div className="container">
          <SchedulingForm sendEmail={this.sendEmail} />
        </div>

        {/* <div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>
          </div> */}
      </div>
    );
  }
}

export default Scheduling;
