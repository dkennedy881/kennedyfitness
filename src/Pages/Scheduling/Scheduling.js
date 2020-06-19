import React, { Component } from "react";
import "./Style.css";

import SchedulingForm from "./SchedulingForm";

class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid flex-fill" id="mainContainer">
        <div className="row">
          <div className="col-md-4">
            <p className="pageTitle">Schedule your person training</p>
          </div>
          <div className="col-md-8">
            <p className="pageMessage">
              Fill out the form to schedule your personal training. I will
              respond via email ASAP.
            </p>
          </div>
        </div>
        <SchedulingForm />

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
