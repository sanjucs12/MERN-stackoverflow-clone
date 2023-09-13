import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import "./questionDetails.css";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans, index) => (
        <div className="display-ans" key={index}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered on {ans.answeredOn}</p>
              <Link
                to={`/User/${ans.userId}`}
                className="user-link"
                style={{ color: "#008" }}
              >
                <Avatar backgroundColor="green" px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
