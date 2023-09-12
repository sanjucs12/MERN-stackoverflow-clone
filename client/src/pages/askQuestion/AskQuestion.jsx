import React from "react";
import "./askQuestion.css";

const AskQuestion = () => {
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form>
          <div className="ask-form-container">
            <label htmlFor="title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="title"
                placeholder="e.g Is there an R function for funding the index of an element in a vector?"
              />
            </label>

            <label htmlFor="body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea id="body" />
            </label>

            <label htmlFor="tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question about</p>
              <input
                type="text"
                id="tags"
                placeholder="e.g (xlm typescript redux))"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
