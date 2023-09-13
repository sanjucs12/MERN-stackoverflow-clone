import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./homeMainBar.css";
import QuestionsList from "./QuestionsList";

const questionsList = [
  {
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mangodb"],
    userPosted: "sanju",
    userId: 1,
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: 2,
      },
    ],
  },
  {
    _id: 2,
    upVotes: 5,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mangodb"],
    userPosted: "sanju",
    userId: 2,
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: 2,
      },
    ],
  },
  {
    _id: 3,
    upVotes: 1,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mangodb"],
    userPosted: "sanju",
    userId: 3,
    askedOn: "jan 1",
    answers: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: 2,
      },
    ],
  },
];

const HomeMainBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = 1;

  const checkAuthHandler = () => {
    if (user === null) {
      alert("please login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        {/* <Link to="/AskQuestion" className="ask-btn">
          Ask Question
        </Link> */}
        <button onClick={checkAuthHandler} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
