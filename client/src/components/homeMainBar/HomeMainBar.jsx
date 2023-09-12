import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./homeMainBar.css";
import QuestionsList from "./QuestionsList";

const HomeMainBar = () => {
  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      title: "What is a function?",
      body: "It meant to be",
      tags: ["java", "node js", "react js", "mangodb"],
      userPosted: "sanju",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 2,
      title: "What is a function?",
      body: "It meant to be",
      tags: ["java", "node js", "react js", "mangodb"],
      userPosted: "kushal",
      askedOn: "jan 1",
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 2,
      title: "What is a function?",
      body: "It meant to be",
      tags: ["javascript", "R", "python"],
      userPosted: "siddu",
      askedOn: "jan 1",
    },
  ];

  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to="/AskQuestion" className="ask-btn">
          Ask Question
        </Link>
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
