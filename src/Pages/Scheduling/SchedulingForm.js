import React, { useState } from "react";
import { useAsync } from "react-async";

import { Form, Button } from "react-bootstrap";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin-left: 30px;
`;

const sendEmail = async ([email, subject, messageBody]) => {
  let request = await new Promise((res, rej) => {
    setTimeout(() => {
      console.log(email);
      console.log(messageBody);
      res();
    }, 15000);
  });
  return request;
};

export default function SchedulingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [sessionType, setSessionType] = useState(null);
  const [isGroup, setIsGroup] = useState(null);
  const [groupCount, setGroupCount] = useState(2);
  const [monthly, setIsMonthly] = useState(null);
  const [sessionPerWeek, setSessionPerWeek] = useState(
    "4 Sessions (1x/wk) = $160"
  );
  const [payInFull, setPayInFull] = useState("5 Sessions = $200");
  const [gymHistory, setGymHistory] = useState("");

  const [personalMessage, setPersonalMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { run } = useAsync({
    deferFn: sendEmail,
    onResolve: () => {
      setIsSending(false);
    },
  });

  useState(() => {
    console.log(isSending);
  });

  const submitForm = async () => {
    const subject = `${sessionType} workout request from ${firstName} ${lastName}`;
    let messageBody = `Name - ${firstName} ${lastName}`;
    messageBody += `\nEmail - ${email}`;
    //check online vs in person switch
    if (sessionType === "In Person") {
      messageBody += `\nWorkout Type - ${sessionType} ${isGroup}`;
      if (isGroup !== "Individual") {
        messageBody += ` - ${groupCount} people`;
      } else {
        messageBody += `\n${monthly} - `;
        if (monthly === "monthly") {
          messageBody += `${sessionPerWeek} `;
        } else {
          messageBody += `${payInFull}`;
        }
      }
    } else {
    }

    messageBody += gymHistory ? `\nGym History - ${gymHistory}` : ``;

    messageBody += `\n\nPersonal Message:\n${personalMessage}`;
    await setIsSending(true);
    run(email, subject, messageBody);
  };

  const clearForm = () => {};

  if (isSending) {
    return (
      <div className="sweet-loading mt-5">
        <PacmanLoader css={override} size={50} color={"yellow"} />
        <div
          className="col-md-12"
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="formSectionTitle">Sending Email</p>
        </div>
      </div>
    );
  }

  return (
    <div id="schedulingFormContainer" className="row">
      {/* <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
        <Alert variant={"warning"} style={{ flex: 1 }}>
          This is a alert—check it out!
        </Alert>
      </div> */}

      <div className="formSection">
        <div className="col-md-12 formSectionTitleContainer">
          <p className="formSectionTitle">Contact Infomation</p>
        </div>
        <div className="fields row">
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
            <Form.Group
              controlId="formLastName"
              className="formFieldGroupCenter"
            >
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
      </div>

      <div className="formSection">
        <div className="col-md-12 formSectionTitleContainer">
          <p className="formSectionTitle">Personalize your personal training</p>
          <p className="formSectionSubTitle">
            Fill out these questions to schedule your custom session.
          </p>
        </div>
        <div className="col-md-12">
          <Form.Group controlId="formInPerson" className="formFieldGroupCenter">
            <Form.Label>In person or virtual online training</Form.Label>
            <Form.Control
              as="select"
              defaultValue={sessionType}
              onChange={(e) => {
                setSessionType(e.target.value);
              }}
            >
              <option value={null}>Select....</option>
              <option value={"In Person"}>In Person</option>
              {/* <option value={"Online"}>Online</option> */}
            </Form.Control>
          </Form.Group>
        </div>
        {sessionType ? (
          <SessionTypeSwitch
            sessionType={sessionType}
            setIsGroup={setIsGroup}
            isGroup={isGroup}
          />
        ) : (
          <></>
        )}
        {isGroup !== null ? (
          <IndividualGroupSwitch
            isGroup={isGroup}
            groupCount={groupCount}
            setGroupCount={setGroupCount}
            setIsMonthly={setIsMonthly}
            monthly={monthly}
          />
        ) : (
          <></>
        )}
        {monthly === "monthly" && isGroup !== "Group" ? (
          <SessionsPerMonth
            sessionPerWeek={sessionPerWeek}
            setSessionPerWeek={setSessionPerWeek}
          ></SessionsPerMonth>
        ) : monthly !== null ? (
          <PayInFull payInFull={payInFull} setPayInFull={setPayInFull} />
        ) : (
          <></>
        )}

        {monthly !== null || isGroup === "Group" ? (
          <React.Fragment>
            <div className="col-md-12">
              <Form.Group
                controlId="formGymHistory"
                className="formFieldGroupCenter"
              >
                <Form.Label>Gym History</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={gymHistory}
                  onChange={(e) => {
                    setGymHistory(e.target.value);
                  }}
                >
                  <option value={null}>Select....</option>
                  <option value={"0 - 6 Months"}>0 - 6 Months</option>
                  <option value={"6 - 12 Months"}>6 - 12 Months</option>
                  <option value={"1 Year +"}>1 Year +</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="col-md-12">
              <Form.Group controlId="additionalInfo">
                <Form.Label>
                  Enter some additional infomation you may want me to know
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  style={{ resize: "none" }}
                  value={personalMessage}
                  onChange={(e) => {
                    setPersonalMessage(e.target.value);
                  }}
                />
              </Form.Group>
            </div>
            <div
              className="col-md-12"
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Button
                variant="warning"
                onClick={() => {
                  submitForm();
                }}
              >
                Book Now
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
function SessionTypeSwitch({ sessionType, isGroup, setIsGroup }) {
  return sessionType === "In Person" ? (
    <div className="col-md-12">
      <Form.Group controlId="formFirstName" className="formFieldGroupCenter">
        <Form.Label>Individual or Group Session ?</Form.Label>
        <Form.Control
          as="select"
          defaultValue={isGroup}
          onChange={(e) => {
            setIsGroup(e.target.value);
          }}
        >
          <option value={null}>Select....</option>
          <option value={"Individual"}>Individual</option>
          <option value={"Group"}>Group</option>
        </Form.Control>
      </Form.Group>
    </div>
  ) : (
    <div>online isnt even a written yet</div>
  );
}

function IndividualGroupSwitch({
  isGroup,
  groupCount,
  setGroupCount,
  monthly,
  setIsMonthly,
}) {
  return isGroup === "Group" ? (
    <>
      <div className="col-md-12" key={isGroup}>
        <Form.Group controlId="formGroupCount" className="formFieldGroupCenter">
          <Form.Label>
            How many people will be in your group? <br />
            <span style={{ color: "#6e6e6e" }}>($10 per person)</span>
          </Form.Label>
          <Form.Control
            type="text"
            value={groupCount}
            onChange={(e) => {
              setGroupCount(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      {/* <MonthlySessionSwitch setIsMonthly={setIsMonthly} monthly={monthly} /> */}
    </>
  ) : (
    <MonthlySessionSwitch setIsMonthly={setIsMonthly} monthly={monthly} />
  );
}

function MonthlySessionSwitch({ setIsMonthly, monthly }) {
  return (
    <div className="col-md-12">
      <Form.Group controlId="formMonthly" className="formFieldGroupCenter">
        <Form.Label>Monthly or pay in full?</Form.Label>
        <Form.Control
          as="select"
          defaultValue={monthly}
          onChange={(e) => {
            setIsMonthly(e.target.value);
          }}
        >
          <option value={null}>Select....</option>
          <option value={"monthly"}>Monthly</option>
          <option value={"in full"}>Pay in full</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
}

function SessionsPerMonth({ sessionPerWeek, setSessionPerWeek }) {
  return (
    <div className="col-md-12">
      <Form.Group
        controlId="formSessionPerWeek"
        className="formFieldGroupCenter"
      >
        <Form.Label>How many sessions per month?</Form.Label>
        <Form.Control
          as="select"
          defaultValue={sessionPerWeek}
          onChange={(e) => {
            setSessionPerWeek(e.target.value);
          }}
        >
          <option value={null}>Select....</option>
          <option value={"4 Sessions (1x/wk) = $160"}>
            4 Sessions (1x/wk) = $160
          </option>
          <option value={"8 Sessions (2x/wk) = $320"}>
            8 Sessions (2x/wk) = $320
          </option>
          <option value={"4 Sessions (3x/wk) = $480"}>
            12 Sessions (3x/wk) = $480
          </option>
        </Form.Control>
      </Form.Group>
    </div>
  );
}

function PayInFull({ setPayInFull, payInFull }) {
  return (
    <div className="col-md-12">
      <Form.Group controlId="formPayInFull" className="formFieldGroupCenter">
        <Form.Label>How many sessions?</Form.Label>
        <Form.Control
          as="select"
          defaultValue={setPayInFull}
          onChange={(e) => {
            setPayInFull(e.target.value);
          }}
        >
          <option value={null}>Select....</option>
          <option value={"5 Sessions = $200"}>5 Sessions = $200</option>
          <option value={"10 Sessions = $400"}>10 Sessions = $400</option>
          <option value={"15 Sessions = $600"}>15 Sessions = $600</option>
          <option value={"20 Sessions = $800"}>20 Sessions = $800</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
}
