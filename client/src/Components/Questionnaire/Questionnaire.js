import React, { useState } from "react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { Form, Button } from "react-bootstrap";
import { useAsync } from "react-async";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
const override = css`
  display: block;
`;

const questionData = [
  {
    title: "Monthly or pay in full?",
    options: ["Monthly", "Paid in Full"],
  },
  {
    title: "How many sessions?",
    options: [
      "5 WORKOUTS $325",
      "1O WORKOUTS $650",
      "12 WORKOUTS $780",
      "15 WORKOUTS $975",
      "20 WORKOUTS $1300",
    ],
  },
  {
    title: "How many sessions per month?",
    options: [
      "1 TIME A WEEK $260 A MONTH",
      "2 TIMES A WEEK $520 A MONTH",
      "3 TIMES A WEEK $780 A MONTH",
      "4 TIMES A WEEK $1040 A MONTH",
    ],
  },
  {
    title: "Gym History",
    options: ["0 - 6 Months", "6 - 12 Months", "1 Year Plus"],
  },
];

const Questionnaire = ({ sendEmail }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions] = useState(questionData);
  const [results, setResults] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isQuestionsDone, setIsQuestionsDone] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const progressQuestion = async (forward = true) => {
    if (forward) {
      if (questionIndex + 1 === questionData.length) {
        await setResults(selectedAnswers);
        setQuestionIndex(questionIndex + 1);
      } else {
        if (questionIndex === 0 && selectedAnswers[0].selected === "Monthly") {
          setQuestionIndex(2);
        } else if (
          questionIndex === 1 &&
          selectedAnswers[0].selected !== "Monthly"
        ) {
          setQuestionIndex(3);
        } else {
          setQuestionIndex(questionIndex + 1);
        }
      }
    } else {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const sendEmailAPI = useAsync({
    deferFn: sendEmail,
    onResolve: () => {
      setIsQuestionsDone(true);
    },
  });

  const doSubmit = async () => {
    if (firstName && lastName && email) {
      setIsSending(true);
      const [sessionType, occurrence, gymHistory] = results;
      const subject = `${sessionType.selected} workout request from ${firstName} ${lastName}`;
      let messageBody = `Name - ${firstName} ${lastName}`;
      messageBody += `\nEmail - ${email}`;
      messageBody += `\n\nType - ${sessionType.selected} - ${occurrence.selected}`;
      messageBody += `\n\nGym History - ${gymHistory.selected}`;
      if (personalMessage) {
        messageBody += `\n\n\nAdditional Details - ${personalMessage}`;
      }
      await sendEmailAPI.run(email, subject, messageBody);
      await setIsQuestionsDone(!isQuestionsDone);
      setIsSending(false);
    }
  };

  const handleSelectedAnswer = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
  };

  const displayQuestion = () => {
    return (
      <QuestionCard
        handleNext={progressQuestion}
        data={questions[questionIndex]}
        handleSelectedAnswer={handleSelectedAnswer}
      />
    );
  };

  const AdditionalDetailForm = () => (
    <div className="fields row">
      <div className="col-md-6">
        <Form.Group controlId="formFirstName" className="formFieldGroupCenter">
          <Form.Label style={{ color: "black" }}>First Name</Form.Label>
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
          <Form.Label style={{ color: "black" }}>Last Name</Form.Label>
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
          <Form.Label style={{ color: "black" }}>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="col-md-12">
        <Form.Group controlId="additionalInfo">
          <Form.Label style={{ color: "black" }}>
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
        className="col-lg-12"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button variant="dark" onClick={doSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );

  if (isSending) {
    return (
      <div>
        <div
          className="sweet-loading mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ClipLoader css={override} size={50} color={"#FFDB58"} />
        </div>
        <div
          className="col-md-12"
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <p className="">One sec, sending email...</p>
        </div>
      </div>
    );
  } else {
    if (!isQuestionsDone) {
      if (questionIndex < 4) {
        return displayQuestion();
      } else {
        return AdditionalDetailForm();
      }
    } else {
      return (
        <div className="alert alert-warning text-center" role="alert">
          Thank you for you submission! Once received I will respond via email
          ASAP.
        </div>
      );
    }
  }
};

Questionnaire.propTypes = {};

export default Questionnaire;
