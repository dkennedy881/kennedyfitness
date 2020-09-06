import React, { Component } from "react";
import "./Style.css";

import SchedulingForm from "./SchedulingForm";

class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendEmail = async ([email, subject, messageBody]) => {
    let request = await new Promise((res, rej) => {
      setTimeout(() => {
        console.log(email);
        console.log(messageBody);
        res();
      }, 3000);
    });
    return request;
  };

  render() {
    return (
      <div className="container flex-fill" id="mainContainer">
        <div className="row headerContainer">
          <div className="col-md-6">
            <p className="pageTitle">Schedule your Personal Training</p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <p className="pageMessage">Personalize your Personal Training.</p>
          </div>
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
