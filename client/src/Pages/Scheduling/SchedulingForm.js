import React, { useState } from "react";
import { useAsync } from "react-async";

import { Form, Button, Card } from "react-bootstrap";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin-left: 30px;
`;

export default function SchedulingForm({ sendEmail }) {
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
  const [submitted, setSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const { run } = useAsync({
    deferFn: sendEmail,
    onResolve: () => {
      setIsSending(false);
      setSubmitted(true);
    },
  });

  useState(() => {
    console.log(isSending);
  });

  const submitForm = async () => {
    const subject = `${sessionType} workout request from ${firstName} ${lastName}`;
    let submissionMessageText = "";
    let messageBody = `Name - ${firstName} ${lastName}`;
    messageBody += `\nEmail - ${email}`;
    //check online vs in person switch
    if (sessionType === "In Person") {
      messageBody += `\nWorkout Type - ${sessionType} ${isGroup}`;
      submissionMessageText += `Workout Type:\n${sessionType} ${isGroup}`;
      if (isGroup !== "Individual") {
        messageBody += ` - ${groupCount} people`;
        submissionMessageText += `\n${groupCount} people`;
      } else {
        messageBody += `\n${monthly} - `;
        submissionMessageText += `\n${monthly}`;
        if (monthly === "monthly") {
          messageBody += `${sessionPerWeek} `;
          submissionMessageText += `\n${sessionPerWeek} `;
        } else {
          messageBody += `${payInFull}`;
          submissionMessageText += `\n${payInFull}`;
        }
      }
    } else {
    }

    messageBody += gymHistory ? `\nGym History - ${gymHistory}` : ``;
    submissionMessageText += gymHistory
      ? `\n\nGym History:\n${gymHistory}`
      : ``;

    messageBody += `\n\nPersonal Message:\n${personalMessage}`;
    submissionMessageText += `\n\nPersonal Message:\n${personalMessage}`;
    await setSubmissionMessage(submissionMessageText);
    await setIsSending(true);
    scrollToTop();
    run(email, subject, messageBody);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  if (isSending && !submitted) {
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

  if (!isSending && submitted) {
    return (
      <div id="schedulingFormContainer" className="row">
        <div className="formSection">
          <div className="col-md-12 formSectionTitleContainer">
            <div className="alert alert-warning text-center" role="alert">
              Thank you for you submission! Once received I will respond via
              email ASAP.
            </div>
          </div>
          <div className="col-md-12 formSectionTitleContainer">
            <Card border="warning" style={{ width: "auto" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  Submission Details
                </Card.Title>
                {/* <Card.Text>
                  Off to a great start! Please review the information below. If
                  there are any problems, please email{" "}
                  <a href="mailto:demarcuskennedy95@gmail.com">
                    demarcuskennedy95@gmail.com
                  </a>
                </Card.Text> */}
                <div className="fields row">
                  <div className="col-md-12">
                    <Form.Group
                      controlId="formFirstName"
                      className="formFieldGroupCenter"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        disabled={true}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      controlId="formLastName"
                      className="formFieldGroupCenter"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        disabled={true}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      controlId="formEmail"
                      className="formFieldGroupCenter"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" value={email} disabled={true} />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      controlId="formEmail"
                      className="formFieldGroupCenter"
                    >
                      <Form.Label>Scheduling Details:</Form.Label>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      controlId="sessionTypeLabel"
                      className="formFieldGroupCenter"
                    >
                      <pre
                        style={{
                          fontWeight: "300",
                          backgroundColor: " #eee",
                          padding: "10px",
                          borderRadius: "8px",
                          borderColor: "#eee",
                          borderStyle: "solid",
                        }}
                      >{`${submissionMessage}`}</pre>
                    </Form.Group>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
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
          <p className="formSectionSubTitle">
            Fill out the form to schedule your personal training. I will respond
            via email ASAP.
          </p>
        </div>
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
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
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
          {/* <option value={"Group"}>Group</option> */}
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
          <option value={"1 TIME A WEEK $260 A MONTH"}>
            1 TIME A WEEK $260 A MONTH
          </option>
          <option value={"2 TIMES A WEEK $520 A MONTH"}>
            2 TIMES A WEEK $520 A MONTH
          </option>
          <option value={"3 TIMES A WEEK $780 A MONTH"}>
            3 TIMES A WEEK $780 A MONTH
          </option>
          <option value={"4 TIMES A WEEK $1040 A MONTH"}>
            4 TIMES A WEEK $1040 A MONTH
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
          <option value={"5 WORKOUTS $325"}>5 WORKOUTS $325</option>
          <option value={"1O WORKOUTS $650"}>1O WORKOUTS $650</option>
          <option value={"12 WORKOUTS $780"}>12 WORKOUTS $780</option>
          <option value={"15 WORKOUTS $975"}>15 WORKOUTS $975</option>
          <option value={"20 WORKOUTS $1300"}>20 WORKOUTS $1300</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
}
