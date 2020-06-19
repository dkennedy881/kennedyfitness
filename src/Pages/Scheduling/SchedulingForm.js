import React, { useState } from "react";

import { Form } from "react-bootstrap";

export default function SchedulingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [sessionType, setSessionType] = useState(null);
  return (
    <div id="schedulingFormContainer" className="row">
      <div className="formSection">
        <div className="col-md-12 formSectionTitleContainer">
          <p className="formSectionTitle">Contact Infomation</p>
        </div>
        <div className="col-md-6">
          <Form.Group
            controlId="formFirstName"
            className="formFieldGroupCenter"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formLastName" className="formFieldGroupCenter">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formEmail" className="formFieldGroupCenter">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div className="col-md-6"></div>
      </div>

      <div className="formSection">
        <div className="col-md-12 formSectionTitleContainer">
          <p className="formSectionTitle">Personalize your personal training</p>
          <p className="formSectionSubTitle">
            Fill out these questions to schedule your custom session.
          </p>
        </div>

        <div className="col-md-6">
          <Form.Group
            controlId="formFirstName"
            className="formFieldGroupCenter"
          >
            <Form.Label>In person or virtual online training</Form.Label>
            <Form.Control
              as="select"
              value={sessionType}
              onChange={(e) => {
                setSessionType(e.target.value);
              }}
            >
              <option value={null} selected disabled>
                Select....
              </option>
              <option value={"In Persion"}>In Person</option>
              <option value={"Online"}>Online</option>
            </Form.Control>
          </Form.Group>
        </div>
        {sessionType ? <SessionTypeSwitch sessionType={sessionType} /> : <></>}
      </div>
    </div>
  );
}

let SessionTypeSwitch = ({ sessionType }) => {
  return sessionType === "In Persion" ? (
    <div>in person</div>
  ) : (
    <div>online isnt even a written yet</div>
  );
};
