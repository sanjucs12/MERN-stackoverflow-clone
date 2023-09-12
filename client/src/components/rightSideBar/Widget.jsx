import React from "react";
import "./rightSideBar.css";
import CommentIcon from "../../assets/message-solid.svg";
import PenIcon from "../../assets/pen-solid.svg";
import BlackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blogs</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={PenIcon} alt="pen" width="18" />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={PenIcon} alt="pen" width="18" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={CommentIcon} alt="pen" width="18" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={CommentIcon} alt="pen" width="18" />
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={BlackLogo} alt="pen" width="18" />
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>12</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>21</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>97</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
