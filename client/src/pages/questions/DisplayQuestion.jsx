import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import QuestionDetails from "./QuestionDetails";
import "../../App.css";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
