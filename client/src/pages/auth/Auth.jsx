import React from "react";
import "./auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../actions/authActions";

const Auth = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    setIsSignUpPage(!isSignUpPage);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("PLEASE ENTER THE DETAILS");
    }
    if (isSignUpPage) {
      if (!name || !email || !password) {
        return alert("PLEASE ENTER THE DETAILS");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignUpPage && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignUpPage && (
          <img src={icon} alt="stack overflow icon" className="login-logo" />
        )}
        <form onSubmit={formSubmitHandler}>
          {isSignUpPage && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignUpPage && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignUpPage && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight <br />
                characters, including at least 1 letter and 1 <br /> number.
              </p>
            )}
          </label>
          {isSignUpPage && (
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional <br />
                product updates, user research invitations,
                <br />
                company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUpPage ? "Sign up" : "Log in"}
          </button>
          {isSignUpPage && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                service
              </span>
              , <span style={{ color: "#007ac6" }}>
                privacy policy
              </span> and{" "}
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignUpPage ? "already have an account?" : "Don't have an account?"}
          <button className="handle-switch-btn" onClick={handleSwitch}>
            {isSignUpPage ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
