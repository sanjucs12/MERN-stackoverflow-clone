import React from "react";
import { useParams, Link } from "react-router-dom";
import upVote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import "./questionDetails.css";
import Avatar from "../../components/avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

const questionsList = [
  {
    _id: "1",
    upVotes: "3",
    downVotes: "2",
    noOfAnswers: "2",
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mangodb"],
    userPosted: "sanju",
    userId: "1",
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: "2",
      },
    ],
  },
  {
    _id: "2",
    upVotes: "5",
    downVotes: "2",
    noOfAnswers: "2",
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mangodb"],
    userPosted: "sanju",
    userId: "2",
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: "2",
      },
    ],
  },
  {
    _id: "3",
    upVotes: "1",
    downVotes: "2",
    noOfAnswers: "2",
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node.js", "react.js", "mangodb"],
    userPosted: "sanju",
    userId: "3",
    askedOn: "jan 1",
    answers: [
      {
        answerBody: "Answer",
        userAnswered: "Kumar",
        answeredOn: "jan 02",
        userId: "2",
      },
    ],
  },
];

const QuestionDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => {
              return (
                <div key={question._id}>
                  <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <img src={upVote} alt="upvote icon" width="18" />
                        <p>{question.upVotes - question.downVotes}</p>
                        <img src={downVote} alt="downvote icon" width="18" />
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className="question-body">{question.questionBody}</p>
                        <div className="question-details-tags">
                          {question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))}
                        </div>
                        <div className="question-actions-user">
                          <div>
                            <button type="button">Share</button>
                            <button type="button">Delete</button>
                          </div>
                          <div>
                            <p>asked on {question.askedOn}</p>
                            <Link
                              to={`/User/${question.userId}`}
                              className="user-link"
                              style={{ color: "#008" }}
                            >
                              <Avatar
                                backgroundColor="orange"
                                px="8px"
                                py="5px"
                              >
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div>{question.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} answers</h3>
                      <DisplayAnswer key={question._id} question={question} />
                    </section>
                  )}
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form>
                      <textarea cols="30" rows="10"></textarea>
                      <br />
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p>
                      Browse other Question tagged {' '}
                      {question.questionTags.map((tag) => (
                        <Link to="/Tags" key={tag} className="ans-tags">
                          {tag}
                        </Link>
                      ))}{" "}
                      or{" "}
                      <Link
                        to="/AskQuestion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        ask your own question.
                      </Link>
                    </p>
                  </section>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
