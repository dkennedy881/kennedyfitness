import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* //TODO
handle the correct answer view
handle next question
design views for other devices

*/

export const QuestionCard = ({ data, handleNext, handleSelectedAnswer }) => {
  const [selectedAnswer, setAnswerSelected] = useState(null);

  const checkAnswer = (answerData) => {
    setAnswerSelected(answerData);
    const ansChoiceWithCorrectAns = {
      ...data,
      selected: answerData,
    };
    handleSelectedAnswer(ansChoiceWithCorrectAns);
  };

  useEffect(() => {
    setAnswerSelected(null);
  }, [data]);

  return (
    <Row fluid={"false"} id="QuestionCard">
      <Col lg={12} id="QuestionCardContainer">
        <div id="QuestionCardQuestionHeaderContainer">
          <div className="QuestionCardCountTextContainer">
            <div className="QuestionCardCountTextSubSection"></div>
            <h1 id="QuestionCardCountText_Mobile">{data.title}</h1>
            <div className="QuestionCardCountTextSubSection"></div>
          </div>

          {/* <p
            id="QuestionCardQuestionExplainText"
            className={`${selectedAnswer && "show"}`}
          >
            remove
          </p> */}
        </div>
        <div id="QuestionCardAnswersContainer">
          {data.options &&
            data.options.map((answer, index) => (
              <Button
                key={`ans-${index}`}
                onClick={() => {
                  checkAnswer(answer);
                }}
                className="m-2"
                variant="light"
              >
                <span className="QuestionCardAnswerText">{answer}</span>
              </Button>
            ))}
        </div>
        <div
          id="QuestionCardQuestionExplainText"
          className={`${selectedAnswer && "show"}`}
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <div>
            {selectedAnswer && (
              <Button
                variant="dark"
                onClick={() => {
                  handleNext();
                }}
              >
                <span>
                  Next <FontAwesomeIcon size={"sm"} icon={faArrowRight} />
                </span>
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};
